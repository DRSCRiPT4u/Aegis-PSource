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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #b#v4310005##k to a good reward. #k\r\n\r\n#L1# #b15 #b#z4310005##k in return for #d#v2022259##k#l \r\n#L2# #b30 #b#z4310005##k in return for #d#v5010083##k#l \r\n#L3# #b100 #b#z4310005##k in return for #d#v1913000##k#k#l \r\n#L4# #b100 #b#z4310005##k in return for #d#v1912999##k#l \r\n#L5# #b70 #b#z4310005##k in return for #d#v1909253##k#l \r\n#L6# #b70 #b#z4310005##k in return for #d#v1909252##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4310005, 15)) {
                    cm.gainItem(2022259, 1);
                    cm.gainItem(4310005, -15);
                    cm.sendOk("#eYou have gained #b#v2022259##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b15 #z4310005##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4310005, 30)) {
                    cm.gainItem(5010083, 1);
                    cm.gainItem(4310005, -30);
                    cm.sendOk("#eYou have gained #b#v5010083##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4310005##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4310005, 100)) {
                    cm.gainItem(1913000, 1);
                    cm.gainItem(4310005, -100);
                    cm.sendOk("#eYou have gained your #b#v1913000##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b100 #z4310005##k.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if(cm.haveItem(4310005, 100)) {
                    cm.gainItem(1912999, 1);
                    cm.gainItem(4310005, -100);
                    cm.sendOk("#eYou have gained your #b#v1912999##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b100 #z4310005##k.");
                }
   cm.dispose();
        } else if (selection == 5) {
                if (cm.haveItem(4310005, 70)) {
                    cm.gainItem(1909253, 1);
                    cm.gainItem(4310005, -70);
                    cm.sendOk("#eYou have gained #b#v1909253##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b70 #z4310005##k.");
                }
   cm.dispose();
        } else if (selection == 6) {
                if (cm.haveItem(4310005, 70)) {
                    cm.gainItem(1909252, 1);
                    cm.gainItem(4310005, -70);
                    cm.sendOk("#eYou have gained #b#v1909252##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b70 #z4310005##k.");
                }
   cm.dispose();
                }
            }
        }
    }
