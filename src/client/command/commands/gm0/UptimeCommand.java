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
package client.command.commands.gm0;

import client.MapleClient;
import client.command.Command;
import net.server.Server;

public class UptimeCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        long milliseconds = System.currentTimeMillis() - Server.uptime;
        int seconds = (int) (milliseconds / 1000) % 60;
        int minutes = (int) ((milliseconds / (1000 * 60)) % 60);
        int hours = (int) ((milliseconds / (1000 * 60 * 60)) % 24);
        int days = (int) ((milliseconds / (1000 * 60 * 60 * 24)));
        c.getPlayer().yellowMessage("Server has been online for " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds.");
    }
}
