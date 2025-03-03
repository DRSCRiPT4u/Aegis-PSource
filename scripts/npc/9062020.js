/*
 *     Created by DrScript
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0 ) {
            cm.sendOk("#eGood bye then.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
       cm.sendYesNo("Hello !\r\nTo be able to fish for treasures in the secret portal located in Free Market, you will need to create a #b#z3011000##k that will help you settle down.\r\n \r\nTo create your own #b#z3011000##k you will need to get me the following items:\r\n #b#v4039052##k - #r600  #b#v4039053##k - #r600  #b#v4039054##k - #r600 \r\n\r\n#eIf you get everything you receive as a gift:  #b#v3011000##k\r\nGood luck!");
	      
       } else {
		   //cm.sendOk("" + selection);
                if (cm.haveItem(4039052, 600) && cm.haveItem(4039053, 600) && cm.haveItem(4039054, 600)) {
					//cm.sendOk("#rHas items");
                    cm.gainItem(3011000, 1); // rewards

                    cm.gainItem(4039052, -600);
                    cm.gainItem(4039053, -600);
                    cm.gainItem(4039054, -600);		
                    cm.sendOk("#eYou have gained #b#v3011000##k!");
                } else {
                     cm.sendOk("#eSorry #b#hh##k...\r\n You are missing items.");
					             cm.dispose();
                }
            }
        }
    }
