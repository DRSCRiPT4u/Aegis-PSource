/*
	 Author: DrScript
*/
var status = 0;

var items = [{"id": 2000012, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000005, "amount": 20}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2022038, "amount": 3}, {"id": 1002707 , "amount": 1}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}, {"id": 5041000 , "amount": 1}, {"id": 1012548, "amount": 1}, {"id": 2000013 , "amount": 10}, {"id": 2000004, "amount": 10}];

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
	cm.sendSimple("Hello !\r\nDo you want to change ?\r\n\r\n-You can get coins from: #bPhantom Tree, Jr. Wraith, Wraith#k\r\n#L0#10 #b#z4310062##k   For   #fUI/UIWindow.img/QuestIcon/5/0##l"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		if (cm.haveItem(4310062, 10)) { 
			cm.gainItem(4310062, -10); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou Dont Have #b10 #z4310062#"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  