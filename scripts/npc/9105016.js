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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #rCoke-Cola Etcs#k too a good reward. #k\r\n\r\n#L1# #b200 #b#z4000210##k in return for #d#v1002524##k#l \r\n#L2# #b250 #b#z4000221##k in return for #d#v1092035##k#l \r\n#L3# #b50 #b#z4000209# and 150 #z4000211##k in return for #d#v1032047##k#k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4000210, 200)) {
                    cm.gainItem(1002524, 1);
                    cm.gainItem(4000210, -200);
                    cm.sendOk("#eYou have gained #b#v1002524##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b200 #z4000210##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4000221, 250)) {
                    cm.gainItem(1092035, 1);
                    cm.gainItem(4000221, -250);
                    cm.sendOk("#eYou have gained #b#v1092035##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b250 #z4000221##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4000209, 50)) {
                    cm.gainItem(1032047, 1);
                    cm.gainItem(4000209, -50);
                    cm.sendOk("#eYou have gained your #b#v1032047##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b50 #z4000209# and #z4000211##k.");
                }
                cm.dispose();
                }
            }
        }
    }
