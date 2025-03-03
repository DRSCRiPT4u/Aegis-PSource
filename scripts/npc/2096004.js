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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your :\r\n #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k\r\n to glove marker. #k\r\n#L1# #bWinter#k Letters#k in return for #d#z1082175##v1082175##k#l \r\n#L2# #bWinter#k Letters#k  in return for #d#z1082176##v1082176##k#l \r\n#L3# #bWinter#k Letters#k in return for #d#z1082177##v1082177##k#k#l \r\n#L4# #bWinter#k Letters#k  in return for #d#z1082178##v1082178##k#l \r\n#L5# #bWinter#k Letters#k  in return for #d#z1082179##v1082179##k#l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4310213, 1) && cm.haveItem(4310214, 1) && cm.haveItem(4310215, 1) && cm.haveItem(4310216, 1) && cm.haveItem(4310217, 1) && cm.haveItem(4310218, 1)) {
                    cm.gainItem(1082175, 1); // rewards
                    cm.gainItem(4310213, -1);
                    cm.gainItem(4310214, -1);
                    cm.gainItem(4310215, -1);
                    cm.gainItem(4310216, -1);
                    cm.gainItem(4310217, -1);
                    cm.gainItem(4310218, -1);
                    cm.sendOk("#eYou have gained #b#v1082175##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n you dont have a #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k letters.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4310213, 1) && cm.haveItem(4310214, 1) && cm.haveItem(4310215, 1) && cm.haveItem(4310216, 1) && cm.haveItem(4310217, 1) && cm.haveItem(4310218, 1)) {
                    cm.gainItem(1082176, 1); // rewards
                    cm.gainItem(4310213, -1);
                    cm.gainItem(4310214, -1);
                    cm.gainItem(4310215, -1);
                    cm.gainItem(4310216, -1);
                    cm.gainItem(4310217, -1);
                    cm.gainItem(4310218, -1);
                    cm.sendOk("#eYou have gained #b#v1082176##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k ...\r\nyou dont have a #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k letters.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4310213, 1) && cm.haveItem(4310214, 1) && cm.haveItem(4310215, 1) && cm.haveItem(4310216, 1) && cm.haveItem(4310217, 1) && cm.haveItem(4310218, 1)) {
                    cm.gainItem(1082177, 1); // rewards
                    cm.gainItem(4310213, -1);
                    cm.gainItem(4310214, -1);
                    cm.gainItem(4310215, -1);
                    cm.gainItem(4310216, -1);
                    cm.gainItem(4310217, -1);
                    cm.gainItem(4310218, -1);
                    cm.sendOk("#eYou have gained your #b#v1082177##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k ...\r\nyou dont have a #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k letters.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if (cm.haveItem(4310213, 1) && cm.haveItem(4310214, 1) && cm.haveItem(4310215, 1) && cm.haveItem(4310216, 1) && cm.haveItem(4310217, 1) && cm.haveItem(4310218, 1)) {
                    cm.gainItem(1082178, 1); // rewards
                    cm.gainItem(4310213, -1);
                    cm.gainItem(4310214, -1);
                    cm.gainItem(4310215, -1);
                    cm.gainItem(4310216, -1);
                    cm.gainItem(4310217, -1);
                    cm.gainItem(4310218, -1);
                    cm.sendOk("#eYou have gained your #b#v1082178##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k ...\r\nyou dont have a #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k letters.");
                }
   cm.dispose();
        } else if (selection == 5) {
                if (cm.haveItem(4310213, 1) && cm.haveItem(4310214, 1) && cm.haveItem(4310215, 1) && cm.haveItem(4310216, 1) && cm.haveItem(4310217, 1) && cm.haveItem(4310218, 1)) {
                    cm.gainItem(1082179, 1); // rewards
                    cm.gainItem(4310213, -1);
                    cm.gainItem(4310214, -1);
                    cm.gainItem(4310215, -1);
                    cm.gainItem(4310216, -1);
                    cm.gainItem(4310217, -1);
                    cm.gainItem(4310218, -1);
                    cm.sendOk("#eYou have gained #b#z1082179##k!");
                } else {
                   cm.sendOk("#eSorry #b#hh##k ...\r\nyou dont have a #v4310213# #v4310214# #v4310215# #v4310216# #v4310217# #v4310218##k letters.");
   cm.dispose();
                }
            }
        }
    }
}  
