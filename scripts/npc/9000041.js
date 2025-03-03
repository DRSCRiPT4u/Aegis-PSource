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

cm.sendNext("Hello #d#h # #k.\r\nWant to know how to donate to a server?");
} else if (status == 1) {
cm.sendOk("To donate to the server, go to the website and select one of the three donation proposals. #b[ www.winter-story.net ]#k \r\n\r\nAll money recieved by MapleAegis is put towards various expenses related to the running of the server.\r\n\r\nAfter your payment you will receive #rMaple Points(MP)#k, \r\n#rDonor Points (DP)#k, #r2 Special Donor Commands#k and #rSpecial Donator Medal#k and on your account within couple hours or minutes. (Depends on Admin/GM availability) \r\n\r\nIf you have any issues please contact our in Discord.");
cm.dispose();
} else if (status == 2) {
   }
  }
 }