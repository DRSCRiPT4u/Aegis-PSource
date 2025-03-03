var status = 0;
function start() {
status = -1;
action(1, 0, 0);
}
function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {

cm.sendNext("Hello #d#h # #k.\r\nI'm looking forward to Halloween!!");
} else if (status == 1) {
cm.sendOk("Halloween is a celebration observed in several countries on 31 October, the eve of the Western Christian feast of All Hallows' Day.\r\nIt begins the three-day observance of Allhallowtide, the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed.\r\n\r\nIt is widely believed that many Halloween traditions originated from ancient Celtic harvest festivals, particularly the Gaelic festival Samhain.\r\n\r\nSamhain marks the end of the harvest season and the beginning of winter or the 'darker half' of the year.\r\n\r\nTraditionally, it is celebrated from 31 October to 1 November, as the Celtic day began and ended at sunset.\r\n\r\nThis is about halfway between the autumn equinox and the winter solstice.\r\n\r\nSamhain was seen as a liminal time, when the boundary between this world and the Otherworld could more easily be crossed.\r\nThis meant the Aos Si, the 'spirits' or 'fairies', could more easily come into our world.\r\nThe tradition of dressing up is believed to have been a way of imitating, and disguising oneself from, the Aos Si who some believed could take you back with them to their world.\r\nIf they saw you looking like a spirit or deceased being they would ignore you as a potential candidate for bringing back with them.\r\n");
cm.dispose();
} else if (status == 2) {
   }
  }
 }
/*
 *     Created by DrScript

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
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#kHow come you are not yet dressed up for the halloween holiday?!\r\nGo kill a #bConjureye#k and get me a #z4000524##k so we can help you! \r\nI'll Exchange your #b#z4000524##k For an item of your choice: #k\r\n#L1# #b20 #b#z4000524##k in return for #d#v1302150##z1302150##k#l \r\n#L2# #b20 #b#z4000524##k in return for #d#v1003027##z1003027##k#l \r\n#L3# #b25 #b#z4000524##k in return for #d#v1302062##z1302062##k#k#l \r\n#L4# #b35 #b#z4000524##k in return for #d#v1003391##z1003391##k#l \r\n#L5# #b3 #b#z4000524##k in return for #d#v2210043##z2210043##k#l \r\n#L6# #b3 #b#z4000524##k in return for #d#v2210009##z2210009##k#l \r\n#L7# #b3 #b#z4000524##k in return for #d#v2210008##z2210008##k#l \r\n#L8# #b25 #b#z4000524##k in return for #d#v3017029##z3017029##k#l \r\n#L9# #b25 #b#z4000524##k in return for #d#v3017032##z3017032##k#l \r\n#L10# #b25 #b#z4000524##k in return for #d#v3010279##z3010279##k#l \r\n#L11# #b30 #b#z4000524##k in return for #d#v3010043##z3010043##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4000524, 20)) {
                    cm.gainItem(1302150, 1);
                    cm.gainItem(4000524, -20);
                    cm.sendOk("#eYou have gained #b#v1302150##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b20 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 2) {
                if (cm.haveItem(4000524, 20)) {
                    cm.gainItem(1003027, 1);
                    cm.gainItem(4000524, -20);
                    cm.sendOk("#eYou have gained #b#v1003027##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b20 #z4000524##k.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4000524, 25)) {
                    cm.gainItem(1302062, 1);
                    cm.gainItem(4000524, -25);
                    cm.sendOk("#eYou have gained your #b#v1302062##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b25 #z4000524##k.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if(cm.haveItem(4000524, 35)) {
                    cm.gainItem(1003391, 1);
                    cm.gainItem(4000524, -35);
                    cm.sendOk("#eYou have gained your #b#v1003391##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b35 #z4000524##k.");
                }
				cm.dispose();
        } else if (selection == 5) {
                if (cm.haveItem(4000524, 3)) {
                    cm.gainItem(2210043, 1);
                    cm.gainItem(4000524, -3);
                    cm.sendOk("#eYou have gained #b#v2210043##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b3 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 6) {
                if (cm.haveItem(4000524, 3)) {
                    cm.gainItem(2210009, 1);
                    cm.gainItem(4000524, -3);
                    cm.sendOk("#eYou have gained #b#v2210009##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b3 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 7) {
                if (cm.haveItem(4000524, 3)) {
                    cm.gainItem(2210008, 1);
                    cm.gainItem(4000524, -3);
                    cm.sendOk("#eYou have gained #b#v2210008##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b3 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 8) {
                if (cm.haveItem(4000524, 25)) {
                    cm.gainItem(3017029, 1);
                    cm.gainItem(4000524, -25);
                    cm.sendOk("#eYou have gained #b#v3017029##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b30 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 9) {
                if (cm.haveItem(4000524, 25)) {
                    cm.gainItem(3017032, 1);
                    cm.gainItem(4000524, -25);
                    cm.sendOk("#eYou have gained #b#v3017032##k !# !");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b25 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 10) {
                if (cm.haveItem(4000524, 25)) {
                    cm.gainItem(3010279, 1);
                    cm.gainItem(4000524, -25);
                    cm.sendOk("#eYou have gained #b#v3010279##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b25 #z4000524##k.");
                }
   cm.dispose();
        } else if (selection == 11) {
                if (cm.haveItem(4000524, 25)) {
                    cm.gainItem(3010043, 1);
                    cm.gainItem(4000524, -25);
                    cm.sendOk("#eYou have gained #b#v3010043##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b25 #z4000524##k.");
                }
   cm.dispose();
                }
            }
        }
    } 
*/