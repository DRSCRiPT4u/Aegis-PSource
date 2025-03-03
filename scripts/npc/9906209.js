/*
	 Author: DrScript
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
                        cm.sendYesNo("Hello #d#hh##k! \r\nMy name is Larry and here I love fishing for treasures ! \r\n\r\nTo succeed in fishing treasures you will have to sit on the #b#z3011000##k - \r\nTo get a #z3011000# you will have to go through the fishing shop in #bAegis City#k. \r\n \r\n#eWould you like to start fishing?");
                } else {
                        cm.startFishing(200000);
                        cm.dispose();

                }
        }
}