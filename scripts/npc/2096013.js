var status = 0;
var menuSelect = 0;


var mhair = Array(32380, 32390, 32400, 32410, 32420, 32430, 32440, 32450, 32460, 32470, 32480, 32490, 32500, 32520, 32640, 33000, 33040, 33100, 33110, 33220, 33180, 33150, 33310, 33340, 33460, 33500, 33510, 33530, 33550, 33580, 33820, 33830, 33930, 35010, 35020, 35050, 35180, 35200, 35220, 35260, 35280, 35340, 35350, 35430, 35440, 35530, 35650, 35690, 35720, 35740, 35790, 35950, 36010, 36020, 36060, 36190, 36200, 36210, 36240, 36250, 36260, 36330, 36460, 36690, 36750, 36790, 36810, 36840, 36900, 36910, 36920, 37690, 39260, 40480);
var fhair = Array(32530, 32540, 32550, 32560, 32650, 32660, 32720, 32730, 32740, 32750, 32760, 33010, 33020, 33030, 33140, 33260, 33320, 33480, 34000, 34010, 34060, 34050, 34110, 34120, 34130, 34170, 34180, 34200, 34210, 34220, 34241, 34250, 34260, 34270, 34290, 34310, 34330, 34420, 34410, 34400, 34430, 34480, 34470, 34580, 34540, 34600, 34640, 34650, 34660, 34670, 34710, 34880, 34860, 34840, 34940, 35190, 36940, 36980, 37280, 37310, 37300, 37380, 37400, 37440, 37450, 37500, 37560, 37570, 37620, 36630, 37680, 37720, 37750, 37810, 37820, 37850, 37920, 37940, 37970, 38000, 38100, 38120, 38110, 38140, 38260, 38290, 38310, 38320, 38330, 38400, 39421, 38440, 38470, 38480, 38490, 38500, 38510, 38540, 38560, 38580, 38600, 38610, 38750, 38740, 38760, 38780, 38770, 38790, 38840, 38860, 38880, 39440, 38640);
var mface = Array(20156, 20246, 20309, 20273, 20197, 20198, 20199, 20374, 20375, 20438, 20652, 20829, 23616, 23423, 23487, 23475, 23495, 23299, 23186, 23786, 23784, 23781, 23738, 23754, 23394, 23354, 23485, 20077, 20177, 20166, 23283, 20176, 20199);
var fface = Array(20156, 20246, 20309, 20273, 20197, 20198, 20199, 20374, 20375, 20438, 20652, 20829, 23616, 23423, 23487, 23475, 23495, 23299, 23186, 23786, 23784, 23781, 23738, 23754, 23394, 23354, 23485, 20077, 20177, 20166, 23283, 20176, 20199);
var skin = Array(0, 1, 2, 3, 4, 5, 9, 10);


var lookList;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode === 0) { // mode == 0 means you pressed exit
        if (menuSelect === 6 && status === 2) { // If you said no when we asked if you wanted to warp out
            cm.sendOk("All right, just look for me if you change your mind!");
        }
        cm.dispose();
        return;
    } else { // mode == 1 means you pressed next, ok, or selected something, or other normal stuff
        status++; // adds 1 to status.
    }

    if (status === 0) {
        cm.sendNext("Hello #e#d#h ##k#n! \r\nHere you can change the #bhair#k, #bhair color#k, #beyes#k, #beye color#k, #bskin tone#k.\r\n\r\nTo make a change you will need to bring me a #v5150035#");
    } else if (status === 1) {
        var selText = "Where would you like to make a change?";
        selText += "\r\n#L0#Change my Skin Color!#l";
        // #L0# This opens the selection. The 0 means selection 0
        // #l this closes the selection
        selText += "\r\n#L1#Change my Hair Style!#l";
        selText += "\r\n#L2#Change my Hair Color!#l";
        selText += "\r\n#L3#Change my Eyes!#l";
        selText += "\r\n#L4#Change my Eye Color!#l";
        selText += "\r\n\r\n#L5##bHow to get a Ticket?#k#l";
        cm.sendSimple(selText);
    } else if (status === 2) {
        menuSelect = selection; // See this selection? It stores the result of the previous chat window. Let me show you
        switch (menuSelect) {
            case 5:
                cm.sendNext("You can get a #d#z5150035##v5150035##k by purchasing #bDonor Points#k\r\nDonor points are purchased exclusively on our site : \r\n#bhttp://winter-story.net#k \r\nand redeeming the points at Cavin's in the Aegis City");
                status = 0; // I'm re-directing you back to the menu here
                break;
            case 1: // Change hairstyle
                lookList = new Array();
                var current = cm.getPlayer().getHair() % 10;
                if (cm.getPlayer().getGender() == 0) {
                    for (var i = 0; i < mhair.length; i++) {
                        lookList.push(mhair[i] + current);
                    }
                } else {
                    for (var i = 0; i < fhair.length; i++) {
                        lookList.push(fhair[i] + current);
                    }
                }
                cm.sendStyle("What hairstyle are you interested in?", lookList);
                break;
            case 2: // Change hair color
                lookList = new Array();
                var current = (cm.getPlayer().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++)
                    lookList.push(current + i);
                cm.sendStyle("What hair color are you interested in?", lookList);
                break;
            case 3:
                lookList = new Array();
                var current = (cm.getPlayer().getFace() % 1000) - (cm.getPlayer().getFace() % 100);
                if (cm.getPlayer().getGender() === 0) {
                    for (var i = 0; i < mface.length; i++) {
                        lookList.push(mface[i] + current);
                    }
                } else {
                    for (var i = 0; i < fface.length; i++) {
                        lookList.push(fface[i] + current);
                    }
                }
                cm.sendStyle("What eyes are you interested in?", lookList);
                break;
            case 4:
                lookList = new Array();
                var current = 0;
                if (cm.getPlayer().getGender() === 0) {
                    current = cm.getPlayer().getFace() % 100 + 20000;
                } else {
                    current = cm.getPlayer().getFace() % 100 + 21000;
                }
                for (var i = 0; i < 8; i++) {
                    lookList.push(current + (i * 100));
                }
                cm.sendStyle("What eye color are you interested in?", lookList);
                break;
            case 0:
                cm.sendStyle("What skin color are you interested in?", skin);
                break;
        }
    } else if (status === 3) {
        if (cm.haveItem(5150035, 1)) {
            if (menuSelect === 1 || menuSelect === 2) {
                    cm.gainItem(5150035, -1);
                    cm.setHair(lookList[selection]);
                    cm.sendNext("Your looks have been changed! Is there anything else?");
                    status = 0;
            } else if (menuSelect === 3 || menuSelect === 4) {
                    cm.gainItem(5150035, -1);
                    cm.setFace(lookList[selection]);
                    cm.sendNext("Your looks have been changed! Is there anything else?");
                    status = 0;
            } else if (menuSelect === 5) {
                    cm.gainItem(5150035, -1);
                    cm.setSkin(skin[selection]);
                    cm.sendNext("Your looks have been changed! Is there anything else?");
                    status = 0;
            } else {
                cm.dispose();
            }
        } else {
            cm.sendNext("Sorry, you do not have the item required.");
            cm.dispose();
        }
    }
}