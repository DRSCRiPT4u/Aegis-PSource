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
    cm.sendSimple("#eHello#d #h ##k,\r\nWelcome to the #bDonor Points Shop#k!\r\nHere you can spend your Donor Points on equipment!\r\n\r\n\r\nYou currently have #d" + 
							cm.getPlayer().getDonorPoints() + " #kDonor Points. #g\r\n#L0# Exchange to Custom Ticket#d\r\n#L1#How do you get Donor Points?");
    } else if (status == 1) {
    if (selection == 0) {
    cm.sendSimple("#eHow many Tickets do you want? #d\r\n#L5# #v5150035# #z5150035# - 6 DonorPoints #r\r\n#L6# 2 #v5150035# #z5150035# - 10 DonorPoints ");
       }
	else if(selection == 1) {
		cm.sendOk("To earn #bDonor Points#k you will need to purchase one of the donation packages found on the site: \r\n#dhttps://www.MapleAegis.net/#k \r\nIn each package you will receive #bDonor Points#k, #rMaple Points#k and most importantly #v1142593#.");
	cm.dispose();
	}
    } else if (status == 2) {
		var cs = cm.getPlayer().getCashShop();
    if (selection == 0) {
     if (cm.getPlayer().getDonorPoints() >= 1) {
         cs.gainCash(1, 3000);
		 cm.sendOk("You have gained #e#b3000 NX");
         cm.giveDonorPoints(-1);
		 cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }
    } else if (selection == 1) {
     if (cm.getPlayer().getDonorPoints() >= 3) {
         cs.gainCash(1, 9000);
		 cm.sendOk("You have gained #e#b9000 NX");
         cm.giveDonorPoints(-3);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }    
    } else if (selection == 2) {
     if (cm.getPlayer().getDonorPoints() >= 5) {
         cs.gainCash(1, 18000);
		 cm.sendOk("You have gained #e#b18000 NX");
         cm.giveDonorPoints(-5);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }    
        } else if (selection == 3) {
     if (cm.getPlayer().getDonorPoints() >= 3) {
         cm.gainItem(4031284, 1);
         cm.giveDonorPoints(-3);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }    
        } else if (selection == 4) {
     if (cm.getPlayer().getDonorPoints() >= 4) {
         cm.gainItem(4031284, 2);
         cm.giveDonorPoints(-5);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }        
        } else if (selection == 5) {
     if (cm.getPlayer().getDonorPoints() >= 4) {
         cm.gainItem(5150035, 1);
         cm.giveDonorPoints(-6);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }    
        } else if (selection == 6) {
     if (cm.getPlayer().getDonorPoints() >= 6) {
         cm.gainItem(5150035, 2);
         cm.giveDonorPoints(-10);
	cm.dispose();
         } else {
         cm.sendOk("You don't have enough DonorPoints");
	cm.dispose();
         }
         }
        }
    } 