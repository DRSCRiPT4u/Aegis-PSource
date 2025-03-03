var status = 0; 

var items = [{"id": 4310209, "amount": 1}, {"id": 3010185 , "amount": 1}, {"id": 2000005, "amount": 100}];

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
	cm.sendSimple("Do you want to change ?\r\n#L0#2 #b#z4400001##k   For   #fUI/UIWindow.img/QuestIcon/5/0##l"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		if (cm.haveItem(4400001, 2)) { 
			cm.gainItem(4400001, -2); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou Dont Have #b2 #z4400001#"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  