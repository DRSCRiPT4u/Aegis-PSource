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
package client.command.commands.gm3;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import server.quest.MapleQuest;

public class QuestStartCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();

        if (params.length < 1) {
            player.yellowMessage("Syntax: !startquest <questid>");
            return;
        }

        int questid = Integer.parseInt(params[0]);

        if (player.getQuestStatus(questid) == 0) {
            MapleQuest quest = MapleQuest.getInstance(questid);
            if (quest != null && quest.getNpcRequirement(false) != -1) {
                c.getAbstractPlayerInteraction().forceStartQuest(questid, quest.getNpcRequirement(false));
            } else {
                c.getAbstractPlayerInteraction().forceStartQuest(questid);
            }

            player.dropMessage(5, "QUEST " + questid + " started.");
        } else {
            player.dropMessage(5, "QUESTID " + questid + " already started/completed.");
        }
    }
}
