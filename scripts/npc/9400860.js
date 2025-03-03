/*
*      Coded by: DrScript
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#e#kOk, see you next time!");
        cm.dispose();
        return;
    }
        if (status == 0) { 
    cm.sendSimple("#eHello#d #h ##k,\r\nWelcome to the #dVOTE Points Shop#k!\r\nHere you can spend your VotePoints on equipment!\r\n\r\n\r\nYou currently have #d" + 
							cm.getVotePoints() + " #kVotePoints. #g\r\n#L0# Exchange to NX #r\r\n#L1# Exchange to Medal#d\r\n#L2#How do you get Vote Points?");
    } else if (status == 1) {
    if (selection == 0) {
    cm.sendSimple("#eHow much do you want? #d\r\n#L100# 3,000 NX - 1 VotePoints #b\r\n#L101# 12,000 NX - 3 VotePoints #r\r\n#L102# 25,000 NX- 6 VotePoints ");
    } else if (selection == 1) {
    cm.sendSimple("#eWould you like to exchange points for the medal?\r\n\r\n#r(If you have one in your inventory you will not be able to take another one)#k #d\r\n#L105# #v1142657# #z1142657# - 20 VotePoints");
       }
	  else if(selection == 2) {
		  cm.sendOk("To get points you will need to vote on the site:\r\n#bhttps://www.winter-story.net/ \r\n#kEach vote will give you one vote points, #ryou can vote every 12 hours.#k");
		 cm.dispose();
	  }
    } else if (status == 2) {
		var cs = cm.getPlayer().getCashShop();
    if (selection == 100) {
     if (cm.getVotePoints() >= 1) {
         cs.gainCash(1, 3000);
		 cm.sendOk("You have gained #e#b3000 NX");
         cm.useVotePoints(1);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }
    } else if (selection == 101) {
     if (cm.getVotePoints() >= 3) {
         cs.gainCash(1, 12000);
		 cm.sendOk("You have gained #e#b12000 NX");
         cm.useVotePoints(3);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }    
    } else if (selection == 102) {
     if (cm.getVotePoints() >= 6) {
         cs.gainCash(1, 25000);
		 cm.sendOk("You have gained #e#b25000 NX");
         cm.useVotePoints(6);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }    
        } else if (selection == 103) {
     if (cm.getVotePoints() >= 3) {
         cm.gainItem(4031284, 1);
		 cm.sendOk("Congratulations, the #z4031284# is in your inventory.");
         cm.useVotePoints(3);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }    
        } else if (selection == 104) {
     if (cm.getVotePoints() >= 5) {
         cm.gainItem(4031284, 2);
		 cm.sendOk("Congratulations, the #z4031284# is in your inventory.");
         cm.useVotePoints(5);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }        
        } else if (selection == 105) {
     if (cm.getVotePoints() >= 20) {
         cm.gainItem(1142657, 1);
		 cm.sendOk("Congratulations, the #z1142657# is in your inventory.");		 
         cm.useVotePoints(20);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough Vote Points");
	cm.dispose();
         }
         }
        }
    } 