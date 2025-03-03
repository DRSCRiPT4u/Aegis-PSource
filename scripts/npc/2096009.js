/*
Multi-Purpose NPC
Author: DrScript
 */

var npcid = Array(2096031,2096032,2096033);

function start() {
    cm.sendSimple ("Hey #d#h ##k \r\nYou can create especially rare and Powerful Throwing-Stars for me!\r\n\r\n#eWhich Throwing-Stars would you like to create?#n\b\r\n#L0#Make me a #b#z2070016##k.#l\r\n#L1#Make me a #b#z2070018##k.#l\r\n#L2#Make me a #b#z2070019##k.#l");
}

function action(mode, type, selection) {
    cm.openNpc(npcid[selection], "" + npcid[selection]);
}
