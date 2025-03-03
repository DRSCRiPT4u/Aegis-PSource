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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your :\r\n #v4170000# #v4170001# #v4170002# #v4170003# #v4170006##k #k\r\n#L1# #bAll five eggs#k in exchange for a#r#v4031283##k#l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4170000, 1) && cm.haveItem(4170001, 1) && cm.haveItem(4170002, 1) && cm.haveItem(4170003, 1) && cm.haveItem(4170006, 1)) {
                    cm.gainItem(4031283, 1); // rewards
                    cm.gainItem(4170000, -1);
                    cm.gainItem(4170001, -1);
                    cm.gainItem(4170002, -1);
                    cm.gainItem(4170003, -1);
                    cm.gainItem(4170006, -1);
					cm.gainExp(15000);
                    cm.sendOk("#eYou have gained #b#v4031283##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You do not have the #bfive eggs#k.\r\n Do not despair, go and keep searching.");
                }
   cm.dispose();
                }
            }
           }
}  
