var status = 0; 

var items = [{"id": 3010023, "amount": 1}, {"id": 3010022, "amount": 1}];

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
	cm.sendSimple("Hello!\r\nHere you can get special #rCoca-Cola potions#k!\r\nGet #b350 #z4000213# #kand you will get a #b#v3010023# or #v3010022##k\r\n\r\n\r\n #L0##b350 #z4000213# #v4000213##k  For#r Coke-Cola Chair #k#fUI/UIWindow.img/QuestIcon/5/0##l"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		 if (cm.haveItem(4000213, 350)) {
			cm.gainItem(4000213, -350); 
			cm.gainExp(10000); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou do not have 350 #z4000213#"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  