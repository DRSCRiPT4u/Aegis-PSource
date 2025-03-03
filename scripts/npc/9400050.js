/*
 *     Created by DrScript
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
      cm.sendSimple("#kHey#e #b#hh##k#n!\r\nWelcome to the weekly to-do list!!\r\nEvery week the task on the board changes!\r\n\r\nGo on a journey and bring me all the colors of the Magic Powder!\r\n#v4007000# #v4007001# #v4007002# #v4007003# #v4007004# #v4007005# #v4007006# #v4007007##k\r\n\r\n#eAnyone who brings me #b50 Magic Powder#k from any of the colors can convert to the following items:#n\r\n#L1# #bAll Magic Powder Color#k in exchange for a #v5431000##l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4007000, 50) && cm.haveItem(4007001, 50) && cm.haveItem(4007002, 50) && cm.haveItem(4007003, 50) && cm.haveItem(4007004, 50) && cm.haveItem(4007005, 50) && cm.haveItem(4007006, 50) && cm.haveItem(4007007, 50)) {
                    cm.gainItem(5431000, 1); // rewards
		//cm.gainItem(X, X); // rewards
                    cm.gainItem(4007000, -50);
                    cm.gainItem(4007001, -50);
                    cm.gainItem(4007002, -50);
                    cm.gainItem(4007003, -50);
                    cm.gainItem(4007004, -50);
					cm.gainItem(4007005, -50);
					cm.gainItem(4007006, -50);
					cm.gainItem(4007007, -50);
					cm.gainExp(15000);
                    cm.sendOk("#eYou have gained #b#v5431000##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You do not have the #bMagic Powder#k.\r\n Do not despair, go and keep searching.");
                }
   cm.dispose();
                }
            }
           }
}  
