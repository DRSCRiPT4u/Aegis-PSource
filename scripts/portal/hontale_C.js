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
/* Portal for the LightBulb Map...

**hontale_c.js
@author Jvlaple
@author DrScript
*/
function enter(pi) {
    if (pi.isEventLeader() == true) {
        var eim = pi.getPlayer().getEventInstance();
        var target;
        var theWay = pi.getMap().getReactorByName("light").getState();
        if (theWay == 1) {
            target = 240050300; //light
        } else if(theWay == 3) {
            target = 240050310; //dark
        } else {
            pi.playerMessage(5, "Hit the Lightbulb to determine your fate!");
            return false;
        }
        
        pi.playPortalSound();
        eim.warpEventTeam(target);
        return true;
    } else {
        pi.playerMessage(6, "You are not the party leader. Only the party leader may proceed through this portal.");
        return false;
    }
}