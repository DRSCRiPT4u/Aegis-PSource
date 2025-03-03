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
      cm.sendSimple("#eHey #b#hh##k!\r\n#kHere you can exchange the #b#z4032733##k.#k\r\n#L1# #b500 #z4032733##k in exchange for a #r#v4033248##k#l#k\r\n#L2# #b2000 #z4032733##k in exchange for a #r#z1004555# #v1004555##k#l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4032733, 500)) {
                    cm.gainItem(4033248, 1); // rewards
                    cm.gainItem(4032733, -500);
					cm.gainExp(15000);
                    cm.sendOk("#eYou have gained #b#v4033248##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\nYou do not have the #b500 #v4032733##k.\r\nDo not despair, go and keep fighting.");
                }
   cm.dispose();
                }
            if (selection == 2) {
                if (cm.haveItem(4032733, 2000)) {
                    cm.gainItem(1004555, 1); // rewards
                    cm.gainItem(4032733, -2000);
					cm.gainExp(25000);
                    cm.sendOk("#eYou have gained #b#v1004555##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\nYou do not have the #b2000 #v4032733##k.\r\nDo not despair, go and keep fighting.");
                }
   cm.dispose();
                }
            }
           }
}  