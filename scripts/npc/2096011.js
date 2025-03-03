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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#ki will #k Exchange your #b#z4031283##k too a good reward. #k\r\n#L1# #b10 #b#z4031283##k in return for #d#v1302290##z1302290##k#l \r\n#L2# #b10 #b#z4031283##k in return for #d#v1312166##z1312166##k#l \r\n#L3# #b10 #b#z4031283##k in return for #d#v1322216##z1322216##k#k#l \r\n#L4# #b10 #b#z4031283##k in return for #d#v1332239##z1332239##k#l \r\n#L5# #b10 #b#z4031283##k in return for #d#v1342086##z1342086##k#l \r\n#L6# #b10 #b#z4031283##k in return for #d#v1372189##z1372189##k#l \r\n#L7# #b10 #b#z4031283##k in return for #d#v1382223##z1382223##k#l \r\n#L8# #b10 #b#z4031283##k in return for #d#v1402211##z1402211##k#l \r\n#L9# #b10 #b#z4031283##k in return for #d#v1412148##z1412148##k#l \r\n#L10# #b10 #b#z4031283##k in return for #d#v1422153##z1422153##k#l \r\n#L11# #b10 #b#z4031283##k in return for #d#v1432179##z1432179##k#l \r\n#L12# #b10 #b#z4031283##k in return for #d#v1442235##z1442235##k#l \r\n#L13# #b10 #b#z4031283##k in return for #d#v1452217##z1452217##k#l \r\n#L14# #b10 #b#z4031283##k in return for #d#v1462205##z1462205##k#l \r\n#L15# #b10 #b#z4031283##k in return for #d#v1472227##z1472227##k#l \r\n#L16# #b10 #b#z4031283##k in return for #d#v1482180##z1482180##k#l \r\n#L17# #b10 #b#z4031283##k in return for #d#v1492191##z1492191##k#l \r\n#L18# #b10 #b#z4031283##k in return for #d#v1092113##z1092113##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1302290, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1302290##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1312166, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1312166##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1322216, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained your #b#v1322216##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if(cm.haveItem(4031283, 10)) {
                    cm.gainItem(1332239, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained your #b#v1332239##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 5) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1342086, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1342086##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 6) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1372189, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1372189##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 7) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1382223, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1382223##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 8) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1402211, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1402211##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 9) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1412148, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1412148##k !# !");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 10) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1422153, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1422153##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 11) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1432179, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1432179##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 12) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1442235, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1442235##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 13) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1452217, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1452217##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
   cm.dispose();
        } else if (selection == 14) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1462205, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1462205##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
				}
	cm.dispose();
        } else if (selection == 15) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1472227, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1472227##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
				}
	 cm.dispose();
        } else if (selection == 16) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1482180, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1482180##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
				}
	cm.dispose();
        } else if (selection == 17) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1492191, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1492191##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
					}
	cm.dispose();
        } else if (selection == 18) {
                if (cm.haveItem(4031283, 10)) {
                    cm.gainItem(1092113, 1);
                    cm.gainItem(4031283, -10);
                    cm.sendOk("#eYou have gained #b#v1092113##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b10 #z4031283##k.");
                }
            }
        }
    }
}  
