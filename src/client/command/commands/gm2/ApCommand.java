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

/*
   @Author: Arthur L - Refactored command content into modules
*/
package client.command.commands.gm2;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import config.YamlConfig;

public class ApCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 1) {
            player.yellowMessage("Syntax: !ap [<playername>] <newap>");
            return;
        }

        if (params.length < 2) {
            int newAp = Integer.parseInt(params[0]);
            if (newAp < 0) newAp = 0;
            else if (newAp > YamlConfig.config.server.MAX_AP) newAp = YamlConfig.config.server.MAX_AP;

            player.changeRemainingAp(newAp, false);
        } else {
            MapleCharacter victim = c.getWorldServer().getPlayerStorage().getCharacterByName(params[0]);
            if (victim != null) {
                int newAp = Integer.parseInt(params[1]);
                if (newAp < 0) newAp = 0;
                else if (newAp > YamlConfig.config.server.MAX_AP) newAp = YamlConfig.config.server.MAX_AP;

                victim.changeRemainingAp(newAp, false);
            } else {
                player.message("Player '" + params[0] + "' could not be found.");
            }
        }
    }
}
