/*
    This file is part of the MapleAegis MapleAegis Server
    Copyleft (L) 2016 - 2019 DrScript

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package server.partyquest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ScheduledFuture;
import client.MapleCharacter;
import constants.game.GameConstants;
import server.TimerManager;
import server.expeditions.MapleExpedition;
import server.expeditions.MapleExpeditionType;
import server.maps.MapleMap;
import tools.MaplePacketCreator;

/**
 *
 * @author Nir
 */
public class WinterMap {

    private MapleExpedition exped;
    private MapleMap map;

    private Map<MapleCharacter, Integer> score;
    //private Map<MapleCharacter, Integer> rewardTier;
    private boolean scoreDirty = false;

    private ScheduledFuture<?> winterUpdate;
    private ScheduledFuture<?> winterFinish;


    private int lostShards = 0;

    private boolean eventClear = false;

    public WinterMap(MapleMap eventMap, MapleExpedition expedition) {
        exped = expedition;
        exped.finishRegistration();

        map = eventMap;
        map.resetFully();

        int pqTimer = 10 * 60 * 1000; //nir - 60 seconds i think we will change it later

        int pqTimerBoard = (9 * 60 * 1000) + 50 * 1000;

        List<MapleCharacter> players = exped.getActiveMembers();
        score = new HashMap<>();

        for (MapleCharacter mc : players) {
            mc.changeMap(map, 0);
            mc.announce(MaplePacketCreator.getClock(pqTimer));
        }


        setWinterFinish(TimerManager.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                exitTheRoom();
                //enterKingsRoom();
            }
        }, pqTimer));

        setWinterUpdate(TimerManager.getInstance().register(new Runnable() {
            @Override
            public void run() {
                //broadcastAriantScoreUpdate();
            }
        }, 500, 500));
    }


    private void setWinterUpdate(ScheduledFuture<?> winterUpdate) {
        this.winterUpdate = winterUpdate;
    }

    private void setWinterFinish(ScheduledFuture<?> winterFinish) {
        this.winterFinish = winterFinish;
    }




    private void cancelWinterUpdate() {
        if (winterUpdate != null) {
            winterUpdate.cancel(true);
            winterUpdate = null;
        }
    }

    private void cancelWinterFinish() {
        if (winterFinish != null) {
            winterFinish.cancel(true);
            winterFinish = null;
        }
    }


    private void cancelWinterSchedules() {
        cancelWinterUpdate();
        cancelWinterFinish();
        ///cancelWinterScoreBoard();
    }

    public int getWinterScore(MapleCharacter chr) {
        Integer chrScore = score.get(chr);
        return chrScore != null ? chrScore : 0;
    }

    public void clearWinterScore(MapleCharacter chr) {
        score.remove(chr);
    }

    public void updateWinterScore(MapleCharacter chr, int points) {
        if (map != null) {
            score.put(chr, points);
            scoreDirty = true;
        }
    }

    private void broadcastWinterScoreUpdate() {
        if (scoreDirty) {
            for (MapleCharacter chr : score.keySet()) {
                chr.announce(MaplePacketCreator.updateAriantPQRanking(score));
            }
            scoreDirty = false;
        }
    }


    public void leaveArena(MapleCharacter chr) {
        if (!(eventClear && GameConstants.isAriantColiseumArena(chr.getMapId()))) {
            leaveArenaInternal(chr);
        }
    }

    private synchronized void leaveArenaInternal(MapleCharacter chr) {
        if (exped != null) {
            if (exped.removeMember(chr)) {
                int minSize = eventClear ? 1 : 2;
                if (exped.getActiveMembers().size() < minSize) {
                    dispose();
                }
                chr.setAriantColiseum(null);

                int shards = chr.countItem(4031868);
                chr.getAbstractPlayerInteraction().removeAll(4031868);
                chr.updateAriantScore(shards);
            }
        }
    }

    public void playerDisconnected(MapleCharacter chr) {
        leaveArenaInternal(chr);
    }


    private void exitTheRoom() {
        exped.removeChannelExpedition(map.getChannelServer());
        cancelWinterSchedules();

        dispose();
        for (MapleCharacter chr : map.getAllPlayers()) {
            //chr.changeMap(980010010, 0);
            chr.yellowMessage("Hey " + chr.getName() + ", Your fishing time is over.");
        }
    }

    private synchronized void dispose() {
        if (exped != null) {
            exped.dispose(false);

            for (MapleCharacter chr : exped.getActiveMembers()) {
                //chr.setAriantColiseum(null);
                chr.announce(MaplePacketCreator.removeClock());
                chr.changeMap(980010000, 0);
            }

            map.getWorldServer().registerTimedMapObject(new Runnable() {
                @Override
                public void run() {
                    score.clear();

                    exped = null;
                    map = null;
                }
            }, 5 * 60 * 1000);
        }
    }
}
