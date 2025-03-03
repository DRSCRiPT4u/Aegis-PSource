var status = 0; 

var items = [{"id": 4440004, "amount": 1}];

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
	cm.sendSimple("Hello!\r\nYou must help me find the #b#z2022257##k!\r\nThey are scattered in #bXXX#k\r\nyou have to be brave to get everything out of there\r\n\r\nGood Luck !\r\n#L0##b200 #z2022257##v2022257#  For  #v4440004#"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		 if (cm.haveItem(2022257, 200)) {
			cm.gainItem(2022257, -200); 
			cm.gainItem(4440004, 1); 
			cm.gainExp(10000); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou do not have enough #b#v2022257##k"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  