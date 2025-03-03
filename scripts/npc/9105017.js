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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #rCoke-Cola Etcs#k :\r\n 150 - #v4000214# , 150 - #v4000216# , 150 - #v4000217# too a set of rings. #k\r\n#L1# #rCoke-Cola Etcs#k in return for #d#v1112230##v1112120##k#l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4000214, 150) && cm.haveItem(4000216, 150) && cm.haveItem(4000217, 150)) {
                    cm.gainItem(1112230, 1); // rewards
		            cm.gainItem(1112120, 1); // rewards
                    cm.gainItem(4000214, -150);
                    cm.gainItem(4000216, -150);
                    cm.gainItem(4000217, -150);
                    cm.sendOk("#eYou have gained #b#v1112120# #kand#b#v1112230##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You are missing one of the items.");
                }
   cm.dispose();
                }
            }
        }
    }
