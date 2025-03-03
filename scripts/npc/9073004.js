var status = 0; 

var items = [{"id": 2000028, "amount": 1}];

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
	cm.sendSimple("Hello !\r\nWant to earn your own riding animal ?\r\n\r\n-You can get #z4310205# from: #bRed Slime, FireBomb#k \r\n who are in #bZipangu - The Secret Spa#k\r\n#L0##b500 #z4310205##k  For  #b#z2000028##v2000028##k#l"); 
} 

else if (status == 1) { 
	if (selection == 0) { 
		if (cm.haveItem(4310205, 500)) { 
			cm.gainItem(4310205, -500); 
			
			var index = Math.floor(Math.random() * items.length);
			cm.gainItem(items[index].id, items[index].amount);
			
			cm.sendOk("You just won " + items[index].amount + " " + cm.getItemAsName(items[index].id));
			cm.dispose(); 
			} else { 
				cm.sendOk("#e#kI'm Sorry.\r\nYou Dont Have #b500 #z4310205#"); 
				cm.dispose(); 
			} 
		} 
	}   
}
}  