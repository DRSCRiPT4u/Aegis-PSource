/*
   @Author: Arthur L - Refactored command content into modules
*/
package client.command.commands.gm6;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import server.life.MapleNPC;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleReactor;

import java.util.List;

public class GetExpRateCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        //player.getMap().getAllReactors().get(0).getName();
        for (MapleMapObject obj : player.getMap().getMapObjects()) {
            if (obj.getType() == MapleMapObjectType.NPC) {
                MapleNPC npc = (MapleNPC) obj;
                player.message("name: " + npc.getName() + " id: " + npc.getId() + " location: " + npc.getPosition().toString());
            }
        }
        //player.message("Your exp rate is " + player.getExpRate() + ".");
    }
}