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
      cm.sendSimple("#e#kHey #b#hh##k!\r\nHere you can convert the #z1052611# into a new and reinforced one!To strengthen the suit you will need to obtain the following items: #b1 #v1052611##k and #b500 #v4430014##k\r\n\r\n\r\n-You can get #b#z4430014##k in the right portal on the map#k\r\n#L1# #b#v1052611# #v4430014# exchange for a #r#z1052588##v1052588##k#l#k#k\r\n#L2# #b#v1052611# #v4430014# exchange for a #r#z1052589##v1052589##k#l#k");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(1052611, 1) && cm.haveItem(4430014, 500)) {
                    cm.gainItem(1052588, 1); // rewards
                    cm.gainItem(4430014, -500);
                    cm.gainItem(1052611, -1);
					cm.gainExp(15000);
                    cm.sendOk("#eYou have gained #b#v1052588##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You do not have the #bfive eggs#k.\r\n Do not despair, go and keep searching.");
                }
   cm.dispose();
                }
				if (selection == 2) {
                if (cm.haveItem(1052611, 1) && cm.haveItem(4430014, 500)) {
                    cm.gainItem(1052589, 1); // rewards
                    cm.gainItem(4430014, -500);
                    cm.gainItem(1052611, -1);
					cm.gainExp(15000);
                    cm.sendOk("#eYou have gained #b#v1052589##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You do not have the #bfive eggs#k.\r\n Do not despair, go and keep searching.");
                }
   cm.dispose();
            }
           }
		  }
}  
