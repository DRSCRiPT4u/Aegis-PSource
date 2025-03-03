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
	cm.sendSimple("Hello #b#h ##k. \r\nYou can skip the cruise in exchange for a #b#z5220098# #v5220098##k ? \r\n#L0# Ellinia Station#l \r\n#L1# Ludibrium Station#l \r\n#L2# Leafre Station#l \r\n#L3# Ariant Station#l \r\n#L4# Mu Lung Station#l");
  } 
 else if (status == 1) {
 switch(selection){
  case 0: 
  if (cm.haveItem(5220098, 1)) {
	cm.warp(101000300, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
	cm.dispose();
  break;
  case 1:
  if (cm.haveItem(5220098, 1)) {
	cm.warp(220000110, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
	cm.dispose();
  break;
  case 2:
  if (cm.haveItem(5220098, 1)) {
	cm.warp(240000100, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
cm.dispose();
  break;
  case 3:
  if (cm.haveItem(5220098, 1)) {
	cm.warp(260000100, 0); 
	cm.gainItem(5220098, -1);
	cm.sendOk("You have reached your destination."); 
	} else {
    cm.sendOk("#eSorry #b#hh##k you dont have #b1 #z5220098##k.");
    }
cm.dispose();
  break;
  case 4:
  if (cm.haveItem(5220098, 1)) {
	cm.warp(250000100, 0); 
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