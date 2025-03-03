/**
 Aegis shop
 @author Jvlaple
*/

var status = 0;

var items = Array(
	4032471, //Black key
	2022179, //Onyx Apple
	2022282, //Demon elixir
	1082223 //Stormcaster gloves
)

var quantities = Array(
	1, //Onyx apple
	1, //Demon elixir
	1, //Demon elixir
	1 //Demon elixir
)

var costs = Array(
	1, //Black Key
	2, //Onyx Apple
	2, //Stormcaster gloves
	3 //Stormcaster gloves
)
	

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
			cm.sendNext("#eHello#d #h ##k,\r\nWelcome to the #dvote points Shop#k!\r\nHere you can spend your vote points on equipment!\r\n\r\n\r\nYou currently have #r" + 
							cm.getPlayer().getAegisPoints() + " #kAegisPoints.");
		} else if (status == 1 ) {
			var shop = "#ePick an item to spend:\r\n";
			for (var i = 0; i < items.length; i++) {
				shop += "#L" + i + "##b#i" + items[i] + "# #b#t" + items[i] + "# #rQuantity: " + quantities[i] + " #k= Points: " + costs[i] + "\r\n";
			}
			cm.sendSimple(shop);
		} else if (status == 2) {
			if (cm.getPlayer().getAegisPoints() >= costs[selection]) {
				cm.gainItem(items[selection], quantities[selection]);
				cm.getPlayer().giveAegisPoints(-costs[selection]);
				cm.sendOk("#e#bThanks for buying!\r\n#kCome back soon!");
				cm.dispose();
			} else {
				cm.sendOk("#e#rYou don't have enough points!");
				cm.dispose();
			}
		}
	}
}