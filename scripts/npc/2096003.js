var status = 0; 
function start() { 
status = -1; 
action(1, 0, 0); 
} 
function action(mode, type, selection) { 
if (mode == -1) { 
cm.dispose(); 
} else { 
if (mode == 0) { 
cm.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
else 
status--; 
if (status == 0) { 
cm.sendSimple("#eHello #d#h ##k,\r\nDo you want to change ?\r\n#L0#300 #b#z4032176##k For 1#b #z4031284##k !#l"); 
} else if (status == 1) { 
if (selection == 0) { 
if (cm.haveItem(4032176, 300)) { 
cm.gainItem(4031284, 1); 
cm.gainItem(4032176, -300); 
cm.sendOk("#eThanks.#b \r\n 1#b #z4031284##k were added to your Inventory#k."); 
cm.dispose(); 
} else { 
cm.sendOk("#e#kI'm Sorry.\r\nYou Dont Have 300 #b#z4032176#"); 
cm.dispose(); 
} 
} 
}   
}
}  