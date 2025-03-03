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
            cm.sendOk("#eGood bye then.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("#e#d This is Lv.61~90 Quest :\r\n #b#v4000048##k - #r120    #b#v4000049##k - #r120    #b#v4000051##k - #r120     #b#v4000052##k - #r120  \r\n  #b#v4000059##k - #r120  #b#v4000085##k - #r120     #b#v4000088##k - #r120\r\n#kIf you get everything you receive as a gift:  #b#v4400001##k\r\n#dGood luck!");
        }else if (status == 1){
            cm.gainItem(4000048, -120);
            cm.gainItem(4000049, -120);
            cm.gainItem(4000051, -120);
            cm.gainItem(4000052, -120);
            cm.gainItem(4000059, -120);
            cm.gainItem(4000085, -120);
            cm.gainItem(4000088, -120);
            cm.gainItem(4400001, 1);
            cm.gainExp(20000);
            cm.dispose();
        }
    }
}  
