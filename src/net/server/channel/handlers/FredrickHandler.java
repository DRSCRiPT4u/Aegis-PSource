/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

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
package net.server.channel.handlers;

import client.MapleCharacter;
import client.MapleClient;
import client.autoban.AutobanFactory;
import client.processor.npc.FredrickProcessor;
import net.AbstractMaplePacketHandler;
import tools.data.input.SeekableLittleEndianAccessor;

/**
 * @author kevintjuh93
 */
public class FredrickHandler extends AbstractMaplePacketHandler {

    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        MapleCharacter chr = c.getPlayer();
        byte operation = slea.readByte();

        switch (operation) {
            case 0x19: //Will never come...
                //c.announce(MaplePacketCreator.getFredrick((byte) 0x24));
                break;
            case 0x1A:
                if (chr.getHiredMerchant() == null && chr.hasMerchant() ) {
                    if (chr.getAbstractPlayerInteraction().hasMerchantItems()) {
                        AutobanFactory.PACKET_EDIT.alert(chr, "tried to dupe with fredrick while was not in shop.");
                        c.disconnect(false, false);
                        return;
                    }
                }

                if (chr.getHiredMerchant() != null) {
                    if (chr.getHiredMerchant().isOwner(chr)) {
                        AutobanFactory.PACKET_EDIT.alert(chr, "tried to dupe with fredrick while shop was opened.");
                        c.disconnect(false, false);
                        return;
                    } else {
                        AutobanFactory.PACKET_EDIT.alert(chr, "tried to exploit " + chr.getHiredMerchant().getOwner() + "`s merchant in Channel " + chr.getChannel().getId() + " [MAP: " + chr.getMap().getMapName() + "]");
                        return;
                    }
                }

                FredrickProcessor.fredrickRetrieveItems(c);
                break;
            case 0x1C: //Exit
                break;
            default:
        }
    }
}
