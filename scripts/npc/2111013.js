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

var status;
 
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
                        if(cm.isQuestStarted(3311)) {
                                var progress = cm.getQuestProgressInt(3311);
                                
                                if (progress == 4) {
                                        progress = 7;
                                } else {
                                        progress = 5;
                                }
                                
                                cm.setQuestProgress(3311, progress);
                                
                                cm.sendOk("This is a mug picture of Dr. De Lang. It seems he is adorning a locket with the emblem of the Alcadno academy, he is a retainer of the Alcadno society.", 2);
                        }
                    
                        cm.dispose();
                }
        }
}
