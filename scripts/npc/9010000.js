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
            cm.sendOk("#eCya Later #d#h #!#k");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#eHello #d#h # #k.\r\nAre you sure you want a leave?#k");
        }else if (status == 1){
            cm.warp(910000000);
            cm.dispose();
        }
    }
}  
