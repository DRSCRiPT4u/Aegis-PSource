/*
	 Author: DrScript
*/
var status = 0;

var items = [{"id": 2022068, "amount": 10}, {"id": 2022069 , "amount": 10}, {"id": 2022002, "amount": 10}, {"id": 2022184, "amount": 5}, {"id": 2022180, "amount": 5}, {"id": 2070004, "amount": 1}, {"id": 2070008, "amount": 1}, {"id": 2330002, "amount": 1}, {"id": 2000005, "amount": 50}, {"id": 5041000, "amount": 1}, {"id": 5390020, "amount": 1}, {"id": 4032176, "amount": 20}];

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
	cm.sendSimple("Hello!\r\nYou must help me find the #bJewels#k!\r\nThey are scattered in #bAegis City - Jungle#k\r\nyou have to be brave to get everything out of there\r\n\r\nGood Luck !\r\n#L0##b50 #v4441300# , 30 #v4443300# , 15 #v4440300##k  For #fUI/UIWindow.img/QuestIcon/5/0##l");
} 

else if (status == 1) { 
	if (selection == 0) { 
		 if (cm.haveItem(4441300, 50) && cm.haveItem(4443300, 30) && cm.haveItem(4440300, 15)) {
			cm.gainItem(4441300, -50); 
			cm.gainItem(4443300, -30); 
			cm.gainItem(4440300, -15); 
			cm.gainExp(10000); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou do not have enough Jewels"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  