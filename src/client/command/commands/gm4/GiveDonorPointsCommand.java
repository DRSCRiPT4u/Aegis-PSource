/*
    This file is part of the MapleAegis MapleAegis Server, commands OdinMS-based
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


package client.command.commands.gm4;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

public class GiveDonorPointsCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient client, String[] params) {
        if(params.length < 2)
        {
            client.getPlayer().yellowMessage("you didnt write the name of the player");
        }
        else
        {
            String ign = params[0];
            MapleCharacter target = client.getChannelServer().getPlayerStorage().getCharacterByName(ign);
            target.setDonorPoints(target.getDonorPoints() + Integer.valueOf(params[1]));
            client.getPlayer().yellowMessage("You gave "
                    + target.getName() + " " +
                    params[1] + " donor points");
        }
    }
}
