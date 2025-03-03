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
            cm.sendYesNo("#e#d This is Lv.31~60 Quest :\r\n #b#v4000020##k - #r120    #b#v4000022##k - #r120    #b#v4000025##k - #r120     #b#v4000032##k - #r120     #b#v4000037##k - #r120   #b#v4000033##k - #r120     #b#v4000039##k - #r120\r\n#kIf you get everything you receive as a gift: #b#v4400000##k\r\n#dGood luck!");
        }else if (status == 1){
            cm.gainItem(4000020, -120);
            cm.gainItem(4000022, -120);
            cm.gainItem(4000025, -120);
            cm.gainItem(4000032, -120);
            cm.gainItem(4000033, -120);
            cm.gainItem(4000037, -120);
            cm.gainItem(4000039, -120);
            cm.gainItem(4400000, 1);
            cm.gainExp(15000);
            cm.dispose();
        }
    }
}  
