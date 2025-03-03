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
            cm.sendYesNo("Hey #e#d#h ##n!#k\r\nI'll take you back to where you were before the visit to Ninja Castle ?");
        }else if (status == 1){
 if (cm.getPlayer().getLevel() >= 15) {
            cm.warp(800000000);
            cm.dispose();
} else {
cm.sendOk("#e#d#h ##k Your level is too low.."); 
cm.dispose(); 
}
        }
    }
}