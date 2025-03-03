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
            cm.sendYesNo("#e#d This is Lv.91~120 Quest :\r\n #b#v4000262##k - #r120   #b#v4000069##k - #r120   #b#v4000074##k - #r120   #b#v4000263##k - #r120  \r\n  #b#v4000181##k - #r120  #b#v4000182##k - #r120    #b#v4000185##k - #r120\r\n #kIf you get everything you receive as a gift: #b#v4400002##k  \r\n #dGood luck! ");
        }else if (status == 1){
            cm.gainItem(4000262, -120);
            cm.gainItem(4000069, -120);
            cm.gainItem(4000074, -120);
            cm.gainItem(4000263, -120);
            cm.gainItem(4000181, -120);
            cm.gainItem(4000182, -120);
            cm.gainItem(4000185, -120);
            cm.gainItem(4400002, 1);
            cm.gainExp(20000);
            cm.dispose();
        }
    }
}  
