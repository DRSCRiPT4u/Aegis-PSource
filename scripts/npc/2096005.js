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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #b#z4001232##k too a good reward. #k\r\n#L1# #b30 #b#z4001232##k in return for #d#v1032055##z1032055##k#l \r\n#L2# #b30 #b#z4001232##k in return for #d#v1032056##z1032056##k#l \r\n#L3# #b30 #b#z4001232##k in return for #d#v1032057##z1032057##k#k#l \r\n#L4# #b30 #b#z4001232##k in return for #d#v1012303##z1012303##k#l \r\n#L5# #b30 #b#z4001232##k in return for #d#v1012304##z1012304##k#l \r\n#L6# #b30 #b#z4001232##k in return for #d#v1012305##z1012305##k#l \r\n#L7# #b30 #b#z4001232##k in return for #d#v1012306##z1012306##k#l \r\n#L8# #b30 #b#z4001232##k in return for #d#v1072432##z1072432##k#l \r\n#L9# #b30 #b#z4001232##k in return for #d#v1072431##z1072431##k#l \r\n#L10# #b30 #b#z4001232##k in return for #d#v1072430##z1072430##k#l \r\n#L11# #b30 #b#z4001232##k in return for #d#v1072429##z1072429##k#l \r\n#L12# #b20 #b#z4001232##k in return for #d#v1012106##z1012106##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1032055, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1032055##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1032056, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1032056##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1032057, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained your #b#v1032057##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if(cm.haveItem(4001232, 30)) {
                    cm.gainItem(1012303, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained your #b#v1012303##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 5) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1012304, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1012304##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 6) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1012305, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1012305##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 7) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1012306, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1012306##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 8) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1072432, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1072432##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 9) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1072431, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1072431##k !# !");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 10) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1072430, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1072430##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 11) {
                if (cm.haveItem(4001232, 30)) {
                    cm.gainItem(1072429, 1);
                    cm.gainItem(4001232, -30);
                    cm.sendOk("#eYou have gained #b#v1072429##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4001232##k.");
                }
   cm.dispose();
        } else if (selection == 12) {
                if (cm.haveItem(4001232, 20)) {
                    cm.gainItem(1012106, 1);
                    cm.gainItem(4001232, -20);
                    cm.sendOk("#eYou have gained #b#v1012106##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b20 #z4001232##k.");
                }
            }
        }
    }
}  
