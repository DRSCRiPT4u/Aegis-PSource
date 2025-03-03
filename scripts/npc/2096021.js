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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #b#z4033248##k too a good reward. #k\r\n #L1# #b2 #b#z4033248##k in return for #d1 #v2431468# #z2431468##k#l \r\n #L2# #b5 #b#z4033248##k in return for #d3 #v2431468# #z2431468##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4033248, 2)) {
                    cm.gainItem(2431468, 1);
                    cm.gainItem(4033248, -2);
                    cm.sendOk("#eYou have gained #b#v1302290##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b2 #z4033248##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4033248, 5)) {
                    cm.gainItem(2431468, 3);
                    cm.gainItem(4033248, -5);
                    cm.sendOk("#eYou have gained #b3 #v1312166##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b5 #z4033248##k.");
                }
                cm.dispose();
                }
            }
        }
    }
