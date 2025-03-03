/*
 *     Created by DrScript
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
      cm.sendSimple("#e#kHey #b#hh##k!\r\n#kCollect 200 #b#z4031697##k from Black Beans or Pink Bean Santa and you will receive a unique medal. #k\r\n#L1# #b200 #b#z4031697##k in return for #d#z1142008##v1142008##k#l");
       } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4031697, 200)) {
                    cm.gainItem(1142008, 1);
                    cm.gainItem(4031697, -200);
                    cm.sendOk("#eYou have gained #b#v1142008##k !!");
                } else {
                    cm.sendOk("#eSorry #b#hh##k you dont have #b200 #z4031697##k.");             
                }
            }
        }
    }
}  
