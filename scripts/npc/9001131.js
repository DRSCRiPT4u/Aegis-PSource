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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #b#z4310013##k too a good reward.\r\n\r\n-You can get #z4310013# from: #bEl-Nath Mobs#k\r\n#L1# #b150 #b#z4310013##k in return for #d#v1002971##z1002971##k#l \r\n#L2# #b300 #b#z4310013##k in return for #d#v1052611##z1052611##k#l \r\n#L3# #b550 #b#z4310013##k in return for #d#v1012574##z1012574##k#k#l \r\n#L4# #b80 #b#z4310013##k in return for #d#v1909152##z1909152##k#l \r\n#L5# #b100 #b#z4310013##k in return for #d10 #v4031697##z4031697##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4310013, 150)) {
                    cm.gainItem(1002971, 1);
                    cm.gainItem(4310013, -150);
                    cm.sendOk("#eYou have gained #b#v1002971##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b150 #z4310013##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4310013, 300)) {
                    cm.gainItem(1052611, 1);
                    cm.gainItem(4310013, -300);
                    cm.sendOk("#eYou have gained #b#v1052611##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b300 #z4310013##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4310013, 550)) {
                    cm.gainItem(1012574, 1);
                    cm.gainItem(4310013, -550);
                    cm.sendOk("#eYou have gained your #b#v1012574##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b550 #z4310013##k.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if(cm.haveItem(4310013, 80)) {
                    cm.gainItem(1909152, 1);
                    cm.gainItem(4310013, -80);
                    cm.sendOk("#eYou have gained your #b#v1909152##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b80 #z4310013##k.");
                }
                cm.dispose();
        } else if (selection == 5) {
                if(cm.haveItem(4310013, 100)) {
                    cm.gainItem(4031697, 10);
                    cm.gainItem(4310013, -100);
                    cm.sendOk("#eYou have gained your #b#v1909152##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b100 #z4310013##k.");
                }
            }
        }
    }
}  
