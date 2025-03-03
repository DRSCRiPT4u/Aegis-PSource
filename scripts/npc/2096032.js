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
       cm.sendYesNo("Hello !\r\nYou want me to make a #b#z2070018##k?\r\nIn that case, i'm goiing to need specific items from you in order to make it.\r\nMake sure you have room in your inventory, though!\r\n\r\n#b#v4005004# 30 #z4005004#\r\n#v4005003# 35 #z4005003#\r\n#v4310205# 3000 #z4310205#\r\n#v4032015# 1 #z4032015#\r\n#v4032016# 1 #z4032016#\r\n#v4032017# 1 #z4032017#\r\n\r\n#fUI/UIWindow.img/QuestIcon/9/1# 30,000,000");	   
       } else {
            cm.dispose();
	if (cm.haveItem(4005004, 30) && cm.haveItem(4005003, 35) && cm.haveItem(4032015, 1) && cm.haveItem(4032016, 1) && cm.haveItem(4032017, 1) && cm.haveItem(4310205, 3000)) {
	if (cm.getMeso() >= 30000000) {
	cm.gainMeso(-30000000);
	cm.gainItem(4005004, -30);
	cm.gainItem(4005003, -35);
	cm.gainItem(4032015, -1);
	cm.gainItem(4032016, -1);
	cm.gainItem(4032017, -1);
              cm.gainItem(4310205, -3000);
	cm.gainItem(2070018, 1); // rewards        				
	cm.sendOk("#eYou have gained #b#v2070018##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You are missing items.");
	cm.dispose();
                }
            }
        }
    }
}