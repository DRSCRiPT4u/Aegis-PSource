/**
 Author; Tamir
 **/

package net.server.channel.handlers;

import client.MapleCharacter;
import client.MapleClient;
import constants.game.GameConstants;
import net.AbstractMaplePacketHandler;
import server.maps.FieldLimit;
import tools.MaplePacketCreator;
import tools.data.input.SeekableLittleEndianAccessor;

public final class EnterMTSHandler extends AbstractMaplePacketHandler {

    @Override
    public final void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        MapleCharacter player = c.getPlayer();
        int freemarket = 910020054;
        int map = player.getMap().getId();

        if (!FieldLimit.CANNOTMIGRATE.check(player.getMap().getFieldLimit()) && map != freemarket && player.getLevel() > 14) {
            player.saveLocation("FREE_MARKET");
            player.changeMap(freemarket);

        } else if (map == freemarket) {
            player.dropMessage(5, "You're already in Lounge");
        } else {
            player.dropMessage(5, "You are currently in " + player.getMap().getMapName() + " You can only use the function at level 15!");
        }
        c.announce(MaplePacketCreator.enableActions());
    }
}