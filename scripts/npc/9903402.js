/*
	 Author: DrScript
*/
var status = 0;

var items = [{"id": 2022078, "amount": 3}, {"id": 5040001, "amount": 3}, {"id": 5120010, "amount": 3}, {"id": 2022075, "amount": 3}];

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
	cm.sendSimple("Hello!\r\nHere you can get special #rCoca-Cola potions#k!\r\nGet #b50 #z4000212# #kand you will get a #bRandom Potion#k\r\n\r\n #L0##b50 #z4000212# #v4000212##k  For#r  Special Potions #k#fUI/UIWindow.img/QuestIcon/5/0##l"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		 if (cm.haveItem(4000212, 50)) {
			cm.gainItem(4000212, -50); 
			cm.gainExp(10000); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou do not have 50 #z4000212#"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  