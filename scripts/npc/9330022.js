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
            cm.sendYesNo("#e#d This is Lv.15~30 Quest :\r\n #b#v4000000##k - #r100    #b#v4000001##k - #r100   #b#v4000002##k - #r100  #b#v4000015##k - #r100 \r\n #b#v4000009##k - #r100   #b#v4000012##k - #r100   #b#v4000176##k - #r1\r\n#kIf you get everything you receive as a gift:  #fUI/UIWindow.img/QuestIcon/5/0#\n\#l\r\n#dGood luck!");
        }else if (status == 1){
            cm.gainItem(4000000, -100);
            cm.gainItem(4000001, -100);
            cm.gainItem(4000002, -100);
            cm.gainItem(4000015, -100);
            cm.gainItem(4000009, -100);
            cm.gainItem(4000012, -100);
            cm.gainItem(4000176, -1);
            cm.gainItem(2100062, 1);
            cm.gainExp(10000);
            cm.dispose();
        }
    }
}  
