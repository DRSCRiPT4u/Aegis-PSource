/*
Multi-Purpose NPC
Author: Moogra
 */

var npcid = Array(9330022,9330029,9330030,9330026);

function start() {
    cm.sendSimple ("#e #kHey #d#h ##k #ePlease Choose your level range : #n \b\r\n#L0# #e#dLevel # #k #b15~30\n\#l\r\n#L1# #dLevel # #k #b30~60\n\#l\r\n#L2# #dLevel # #k #b60~90\n\#l\r\n#L3# #dLevel # #k #b90~120\n\#l");
}

function action(mode, type, selection) {
      //cm.openNpc(9330022)
    cm.openNpc(npcid[selection], "" + npcid[selection]);
}
