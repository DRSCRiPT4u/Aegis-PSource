// Made By DrScript
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
	cm.sendSimple("Hello #b#h ##k. \r\nYou can skip the cruise in exchange for a #b#z5220098# #v5220098##k ? \r\n#L0# Orbis Station#l \r\n#L1# Herb Town Station#l");
  } 
 else if (status == 1) {
 switch(selection){
  case 0: 
  if (cm.haveItem(5220098, 1)) {
	cm.warp(200000100, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
	cm.dispose();
 break;
  case 1:
  if (cm.haveItem(5220098, 1)) {
	cm.warp(251000000, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
	cm.dispose();
  } 
}
  } 
} 