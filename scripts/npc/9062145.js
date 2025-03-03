/*
Multi-Purpose NPC
Author: Moogra
 */

var npcid = Array(9062144,9062146,9062147);

function start() {
    cm.sendSimple ("#e #kHey #d#h ##k #e\r\n-You can create the coins at #bRaven#k on the market portal. \r\n\r\nPlease select one of the categories: #n \b\r\n#L0# #v4400000# - #b3#k #z4400000# for #fUI/UIWindow.img/QuestIcon/5/0#\n\#l\r\n#L1# #v4400001# - #b2#k #z4400001# for #fUI/UIWindow.img/QuestIcon/5/0#\n\#l\r\n#L2# #v4400002# - #b1#k #z4400002# for #fUI/UIWindow.img/QuestIcon/5/0#\n\#l");
}

function action(mode, type, selection) {
    cm.openNpc(npcid[selection], "" + npcid[selection]);
}
