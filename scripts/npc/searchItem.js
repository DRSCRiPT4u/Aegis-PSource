var status = -1;
var player;

function pushIfItemExists(array, itemid) {
    if ((itemid = cm.getCosmeticItem(itemid)) != -1 && !cm.isCosmeticEquipped(itemid)) {
        array.push(itemid);
    }
}

function start() {
	player = cm.getPlayer();
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1){
        status++;
    }
	else{
		cm.dispose();
        return;
	}
    if (status == 0) {
		var str = cm.getItemsCommand(player.getCommand());
		selection = cm.sendSimple(str);
    } else if (status == 1){
		if (cm.canHold(selection)){
			cm.gainItem(selection);
			player.dropMessage(5, "you have received item id: " + selection + ".");
		}
		else{
			cm.sendNext("you don't have enough space for this item.");
		}
        cm.dispose();
    }
}