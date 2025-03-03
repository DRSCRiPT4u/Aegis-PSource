function start() {
cm.sendSimple ("#kChoose Your one:\r\n\r\n#L0#A#l\r\n#L1#B#l\r\n#L2#C#l\r\n#L3#D#l\r\n#L4#E#l\r\n#L5 #F#l\r\n#L6#G#l");
 }
 function action(mode, type, selection) {
 switch(selection) {
 case 0: cm.openNpc(9201074); break;
 case 1: cm.openNpc(9000041); break;
 case 2: cm.openNpc(9330022); break;
 case 3: cm.openNpc(9330029); break;
 case 4: cm.openNpc(9330030); break;
 case 5: cm.openNpc(9330026); break;
 case 6: cm.openNpc(9330032); break;
 }
 }