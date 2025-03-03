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
else if (status == 1) {
if (selection == 0) {
if (cm.haveItem(4310212, 1)) { 
cm.gainMeso(1000000000); 
cm.gainItem(4310212, -1); 
cm.sendOk("#eThanks.#b \r\n 1M Mesos#k were added to your #rInventory#k."); 
cm.dispose(); 
} else {
cm.sendOk("You Dont Have Enough Mesos");
}
} else if (selection == 1) {
if (cm.haveMeso(1000000000)) { 
cm.gainItem(4310212, 1); 
cm.gainMeso(-1000000000); 
cm.sendOk("#eThanks.#b \r\n One #v4001113##k were added to your #rInventory#k."); 
cm.dispose(); 
} else {
cm.sendOk("You Dont Have Enough Mesos");
cm.dispose(); 
}

}

}
}
}
}
