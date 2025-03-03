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
			cm.sendSimple("Hey #b#h ##k,\r\nI am the #rMesos Store Banker#k!\r\nWhat do you wanna do? \r\n#L0#Trade 1 bil for a #i4310212#\r\n#L1#Trade #i4310212# for 1 bil");
		} else if (selection == 0) {
            if(cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(4310212, 1);
                cm.sendOk("Here's your MMF Coin!");
				cm.dispose();
			} else {
				cm.sendOk("You don't have enough mesos.");
				cm.dispose();
			}
 		} else if (selection == 1) {
			if(cm.getMeso() < 1100000000 && cm.haveItem(4310212, 1)) {
                cm.gainMeso(1000000000);
				cm.gainItem(4310212, -1);
                cm.sendOk("Here's your 1,000,000,000 (1B) mesos!");
				cm.dispose();
			} else {
				cm.sendOk("You don't have any #i4310212# or you have too much mesos in your inventory (if we gave the mesos to you anyway, it would make your mesos go negative!).");
				cm.dispose();
			}
		}
	}
}