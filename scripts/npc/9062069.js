/*
Multi-Purpose NPC
Author: DrScript
 */

var npcid = Array(9062164,9062164,9062164,9062164);

function start() {
    cm.sendSimple ("Welcome To #rPink Bean Mission#k !!\r\nPlease select the level of difficulty you want : \r\n#L0# #v4430010#\n\#l   #L1# #v4430011#\n\#l\#L2#  #v4430012#\n\#l  #L3# #v4430013#\n\#l");
}

function action(mode, type, selection) {
    cm.openNpc(npcid[selection], "" + npcid[selection]);
}
