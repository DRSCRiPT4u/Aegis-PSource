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
            cm.sendOk("Cya Later #e#d#h ##n#k !");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("Hey #e#d#h ##n!#k\r\nHave you been to #bCoca-Cola City#k?\r\nCome and help us fight the mob, get through the missions and win Coca-Cola items!\r\n\r\n#r#eNote#n#k that in order to run you will need to be above level 20\r\nAre you ready to go?#k");
        }else if (status == 1){
 if (cm.getPlayer().getLevel() >= 20) {
            cm.warp(219000000);
            cm.dispose();
} else {
cm.sendOk("#e#d#h ##k Your level is too low.."); 
cm.dispose(); 
}
        }
    }
}