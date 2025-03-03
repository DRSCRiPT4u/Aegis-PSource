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
            cm.sendOk("#eCya Later #d#h ##k !");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#eHello #d#h # #k.\r\nI need to help #bJin#k and #bSofer#k find the Rainbow Maple Leafs ...#k  \b\r\ \b\r\ I can take you there if you are level #r120 or higher#k \b\r\ Any help will be appreciated!#k");
        }else if (status == 1){
 if (cm.getPlayer().getLevel() >= 120) {
            cm.warp(992045000);
            cm.dispose();
} else {
cm.sendOk("#eSorry #d#h #.#k\r\n#e#rOnly levels 120 and above can enter"); 
cm.dispose(); 
}
        }
    }
}