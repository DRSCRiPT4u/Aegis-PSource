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
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.MapleItemInformationProvider;
import server.quest.MapleQuest;
import tools.Pair;

import java.io.File;

public class SearchCommand extends Command {
    private static MapleData npcStringData;
    private static MapleData mobStringData;
    private static MapleData skillStringData;
    private static MapleData mapStringData;

    {
        setDescription("");

        MapleDataProvider dataProvider = MapleDataProviderFactory.getDataProvider(new File("wz/String.wz"));
        npcStringData = dataProvider.getData("Npc.img");
        mobStringData = dataProvider.getData("Mob.img");
        skillStringData = dataProvider.getData("Skill.img");
        mapStringData = dataProvider.getData("Map.img");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 2) {
            player.yellowMessage("Syntax: !search <type> <name>");
            return;
        }
        StringBuilder sb = new StringBuilder();

        String search = joinStringFrom(params, 1);
        long start = System.currentTimeMillis();//for the lulz
        MapleData data = null;
        if (!params[0].equalsIgnoreCase("ITEM")) {
            int searchType = 0;

            if (params[0].equalsIgnoreCase("NPC")) {
                data = npcStringData;
            } else if (params[0].equalsIgnoreCase("MOB") || params[0].equalsIgnoreCase("MONSTER")) {
                data = mobStringData;
            } else if (params[0].equalsIgnoreCase("SKILL")) {
                data = skillStringData;
            } else if (params[0].equalsIgnoreCase("MAP")) {
                data = mapStringData;
                searchType = 1;
            } else if (params[0].equalsIgnoreCase("QUEST")) {
                data = mapStringData;
                searchType = 2;
            } else {
                sb.append("#bInvalid search.\r\nSyntax: '!search [type] [name]', where [type] is MAP, QUEST, NPC, ITEM, MOB, or SKILL.");
            }
            if (data != null) {
                String name;

                if (searchType == 0) {
                    for (MapleData searchData : data.getChildren()) {
                        name = MapleDataTool.getString(searchData.getChildByPath("name"), "NO-NAME");
                        if (name.toLowerCase().contains(search.toLowerCase())) {
                            sb.append("#b").append(Integer.parseInt(searchData.getName())).append("#k - #r").append(name).append("\r\n");
                        }
                    }
                } else if (searchType == 1) {
                    String mapName, streetName;

                    for (MapleData searchDataDir : data.getChildren()) {
                        for (MapleData searchData : searchDataDir.getChildren()) {
                            mapName = MapleDataTool.getString(searchData.getChildByPath("mapName"), "NO-NAME");
                            streetName = MapleDataTool.getString(searchData.getChildByPath("streetName"), "NO-NAME");

                            if (mapName.toLowerCase().contains(search.toLowerCase()) || streetName.toLowerCase().contains(search.toLowerCase())) {
                                sb.append("#b").append(Integer.parseInt(searchData.getName())).append("#k - #r").append(streetName).append(" - ").append(mapName).append("\r\n");
                            }
                        }
                    }
                } else {
                    for (MapleQuest mq : MapleQuest.getMatchedQuests(search)) {
                        sb.append("#b").append(mq.getId()).append("#k - #r");

                        String parentName = mq.getParentName();
                        if (!parentName.isEmpty()) {
                            sb.append(parentName).append(" - ");
                        }
                        sb.append(mq.getName()).append("\r\n");
                    }
                }
            }
        } else {
            //search command -> to npc.
            player.setCommand(search);
            c.getAbstractPlayerInteraction().openNpc(9010000, "searchItem");
            return;
        }
        if (sb.length() == 0) {
            sb.append("#bNo ").append(params[0].toLowerCase()).append("s found.\r\n");
        }
        sb.append("\r\n#kLoaded within ").append((double) (System.currentTimeMillis() - start) / 1000).append(" seconds.");//because I can, and it's free

        c.getAbstractPlayerInteraction().npcTalk(9010000, sb.toString());
    }
}
