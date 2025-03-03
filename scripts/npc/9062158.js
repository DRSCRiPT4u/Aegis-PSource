/*
 *     Created by DrScript
*/

var status = 0;
function start() {
    status = -1;
    action (1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0 ) {
            cm.sendOk("Cya Later #e#d#h ##k#n !");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("Hey #e#d#h ##n!#k\r\nHave you already visited the #bPink Bean area#k?\r\nYou can get in the Pink Bean Quests various items that symbolize us\r\n\r\nPlease #e#rnote#k#n that the entrance to the Pink Bean complex is for levels 120 and above.\r\n\r\nAre you ready to go?#k");
        }else if (status == 1){
 if (cm.getPlayer().getLevel() >= 120) {
            cm.warp(910020030);
            cm.dispose();
} else {
cm.sendOk("#e#d#h ##k Your level is too low.."); 
cm.dispose(); 
}
        }
    }
}