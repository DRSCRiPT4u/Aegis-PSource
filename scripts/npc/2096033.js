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
	if (status == 0 && mode == 0 ) {
            cm.sendOk("#eGood bye then.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	cm.sendYesNo("Hello !\r\nYou want me to make a #b#z2070019##k?\r\nIn that case, i'm goiing to need specific items from you in order to make it.\r\nMake sure you have room in your inventory, though!\r\n\r\n#b#v4005004# 50 #z4005004#\r\n#v4005003# 55 #z4005003#\r\n#v4310205# 5000 #z4310205#\r\n#v4033732# 1 #z4033732#\r\n#v4003002# 5 #z4003002#\r\n\r\n#fUI/UIWindow.img/QuestIcon/9/1# 50,000,000");
	} else {
	cm.dispose();
	 if (cm.haveItem(4005004, 50) && cm.haveItem(4005003, 55) && cm.haveItem(4033732, 1) && cm.haveItem(4003002, 5) && cm.haveItem(4310205, 5000)) {
	 if (cm.getMeso() >= 50000000) {	
	cm.gainMeso(-50000000);
	cm.gainItem(4005004, -50);
	cm.gainItem(4005003, -55);
	cm.gainItem(4033732, -1);
	cm.gainItem(4003002, -5);
	cm.gainItem(4310205, -5000);
	cm.gainItem(2070019, 1); // rewards             
	cm.sendOk("#eYou have gained #b#v2070019##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You are missing items.");
            cm.dispose();
                }
            }
        }
    }
}