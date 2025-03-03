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
       cm.sendYesNo("Hello !\r\nYou want me to make a #b#z2070016##k?\r\nIn that case, i'm goiing to need specific items from you in order to make it.\r\nMake sure you have room in your inventory, though!\r\n\r\n#b#v4005004# 10 #z4005004#\r\n#v4005003# 15 #z4005003#\r\n#v4031917# 1 #z4031917#\r\n#v4310205# 1000 #z4310205#\r\n\r\n#fUI/UIWindow.img/QuestIcon/9/1# 10,000,000");	      
       } else {
            cm.dispose();
	if (cm.haveItem(4005004, 10) && cm.haveItem(4005003, 15) && cm.haveItem(4031917, 1) && cm.haveItem(4310205, 1000)) {
	if (cm.getMeso() >= 10000000) {
	cm.gainMeso(-10000000);
	cm.gainItem(4005004, -10);
	cm.gainItem(4005003, -15);
	cm.gainItem(4031917, -1);
	cm.gainItem(4310205, -1000);
	cm.gainItem(2070016, 1); // rewards					
	cm.sendOk("#eYou have gained #b#v2070016##k!");
                } else {
	cm.sendOk("#eSorry #b#hh##k...\r\n You are missing items.");
	cm.dispose();
                }
            }
        }
    }
}