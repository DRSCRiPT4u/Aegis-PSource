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
			cm.sendSimple("Hello!\r\nYou must help me find the #bEssence Stone#k!\r\n#v4033442# #v4033443# #v4033444# #v4033445# #v4033446# #v4033447# #v4033448# #v4033449# #v4033450#\r\nI made you a list so you can find all the stones#k\r\nyou have to be brave to get everything out of there\r\n\r\n#L1#All the colors of the #bEssence Stones x3#k For #v1122017##l \r\n#L2#Where is all the essence stone?#l\r\n\r\n\r\nGood Luck !");
		} else if (status == 1) {
		if (selection == 1) {
		if (cm.haveItem(4033442, 3) && cm.haveItem(4033443, 3) && cm.haveItem(4033444, 3) && cm.haveItem(4033445, 3) && cm.haveItem(4033446, 3) && cm.haveItem(4033447, 3) && cm.haveItem(4033448, 3) && cm.haveItem(4033449, 3) && cm.haveItem(4033450, 3)) {
			cm.gainItem(4033442, -3); 
			cm.gainItem(4033443, -3); 
			cm.gainItem(4033444, -3); 
			cm.gainItem(4033445, -3); 
			cm.gainItem(4033446, -3); 
			cm.gainItem(4033447, -3); 
			cm.gainItem(4033448, -3); 
			cm.gainItem(4033449, -3); 
			cm.gainItem(4033450, -3); 
			cm.gainItem(1122017, 1, false, true, 1000 * 60 * 60 * 24 * 3); // 3 days expiration
			cm.gainExp(100000); 
            cm.sendOk("#eYou have gained #v1122017##k for 3 days!");
         } else {
            cm.sendOk("#e#kI'm Sorry.\r\nYou do not have enough #bEssence Stone#k.");
                }
			cm.dispose();
			} else if (selection == 2) {
				cm.sendOk("#bRed Essence Stone:#k\r\nRed Porky, Bain\r\n\r\n#bOrange Essence Stone:#k\r\nBooper Scarlion, Morphed Blin\r\n\r\n#bYellow Essence Stone:#k\r\nMiner Zombie, Tauromacis\r\n\r\n#bGreen Essence Stone:#k\r\nExtra B, Memory monk\r\n\r\n#bBlue Essence Stone:#k\r\nYeti and Pepe, Blue Kentaurus\r\n\r\n#bPurple Essence Stone:#k\r\nMecateon, D. roy\r\n\r\n#bPink Essence Stone:#k\r\nGallopera, Cold Shark\r\n\r\n#bWhite Essence Stone:#k\r\nSkelegon, Skelosaurus\r\n\r\n#bBlack Essence Stone:#k\r\nNinto");
				                }
                cm.dispose();
                }
            }
}  
