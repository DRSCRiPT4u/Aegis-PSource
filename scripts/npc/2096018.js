var status;
var str, i;
var item = [0,0];
var bossesArray = ["Jr. Balrog","Headless Horseman","Big Foot","Ergoth","Pianus","Papulatus","Zakum","Horn Tail"]
var certificateArray = [4031019,4031903,4032013,4031904,4001085,4001084,4001083,4001094]
var questEtc = [4031856, 4031857, 4031868]

function getBossValue(currentBoss){
	var x = 1;
	while (currentBoss > 0){
		x *= 10;
		currentBoss--;
	}
	return x;
}

function getNum(bossesHP, currentBoss){
	return parseInt((bossesHP / currentBoss) % 10);
}

function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
				status++;
		else
				status--;

		if(status == 0) {
			if (cm.getPlayer().getLevel() > 69){
				cm.sendNext("#e#bSecret Missions#k#n.\r\n\r\nI can increase your #bINNER POWER#k.\r\nClick #bnext#k to select your missions.");
			}
			else{
				cm.sendOk("#e#bSideQuest Secret Missions#k#n.\r\n\r\nWhen you get stronger and reach #bLEVEL 70#k.\r\nThen I will share my #rSecret of Power#k with you.");
				cm.dispose();
			}	
				 
		} else if (status == 1){
			str = "#eSelect your missions:\r\n\r\n";
			str += "#b#L0#Boss Missions#l\r\n#L1#Quest Missions#l";
			selection = cm.sendSimple(str);
		} else if (status == 2){
			if (selection == 0){
				str = "#eYou can finish up to #b16 #kBoss Missions.\r\n#rHunt#k the bosses and bring me back a #rProof#k.\r\n";
				for (i = 0; i < bossesArray.length; i++){
					str += "#b#L"+i+"#" + bossesArray[i] + "\t\t#v" + certificateArray[i] + "#\t\t" + getNum(cm.getPlayer().getBossesHp(), getBossValue(i)) + "/2#l\r\n";
				}
			}
			else{
				str = "#eSearch for my Items!\r\n#r#v"+questEtc[0]+"#\t\t-\t\t#z4031856#\r\n#v"+questEtc[1]+ "#\t\t-\t\t#z4031857#\r\n#v" +questEtc[2]+"#\t\t  -\t\t  #z4031868#\r\n\r\n";
				for (i = 0; i < questEtc.length; i++){
					str += "#b#L"+i+"#I've got 500 #v" + questEtc[i] + "# to trade with you.\t\t" + getNum(cm.getPlayer().getQuestsHp(), getBossValue(i)) + "/2#l\r\n";
					status = 4;
				}
			}
			selection = cm.sendSimple(str);
		} else if (status == 3){
			if (getNum(cm.getPlayer().getBossesHp(), getBossValue(selection)) > 1){
				str = "#e#bMax Upgraded#k.";
				cm.sendOk(str);
				cm.dispose();
			}
			else{				
				str = "#b1st Upgrade = #r500 HP#k.\r\n#b2nd Upgrade = #r20 AP#k.\r\n\r\nDo you want to trade the #ritem#k #v" + certificateArray[selection] + "# for an #bupgrade#k?\r\n\r\n";
				item[1] = selection;
				item[0] = certificateArray[selection];
				cm.sendYesNo(str);
			}
		} //Handling Bosses HP missions.
		else if (status == 4){
			if (cm.hasItem(item[0])){
				var bossValue = getBossValue(item[1]);
				var value = getNum(cm.getPlayer().getBossesHp(), bossValue);
				switch(value){
					case 0:
						cm.gainItem(item[0],-1);
						cm.getPlayer().addMaxHP(500);
						cm.getPlayer().addBossesHp(bossValue);
						cm.getPlayer().dropMessage(5, "You've received +500 HP.");
						str = "#e#bCongratz!#k\r\nYou've received +500 HP.\r\n\r\nI hope you will keep getting #rStronger#k.";
						break;
					case 1:
						str = "#e#bGreat Job!#k\r\nYou've received +20 AP.\r\n\r\nI believe you will get #rStronger#k.";
						cm.gainItem(item[0],-1);
						cm.getPlayer().addBossesHp(bossValue);
						cm.getPlayer().gainAp(20, false);
						cm.getPlayer().dropMessage(5, "You've received +20 AP.");
						break;
					default:
						str = "#bMax Upgraded#k, to be continue...";
						break;
				}
				cm.sendOk(str);
				status = 10;
			}
			else{
				str = "#eSeems like you #bdo not#k have #v" + item[0] + "#\r\n\r\nCome back when you have a #rProof#k."
				cm.sendOk(str);
				cm.dispose();
			}		
		} else if (status == 5){
			if (getNum(cm.getPlayer().getQuestsHp(), getBossValue(selection)) > 1){
				str = "#e#bMax Upgraded#k.";
				cm.sendOk(str);
				cm.dispose();
			}
			else{				
				str = "#b1st Upgrade = #r350 HP#k.\r\n#b2nd Upgrade = #r20 AP#k.\r\n\r\nDo you want to trade #b500#k #v" + questEtc[selection] + "# for an #bupgrade#k?";
				item[0] = questEtc[selection];
				item[1] = selection;
				cm.sendYesNo(str);
			}
			
		} //Handling Quests HP missions.
		else if (status == 6){
			if (cm.hasItem(item[0], 500)){
				var bossValue = getBossValue(item[1]);
				var value = getNum(cm.getPlayer().getQuestsHp(), bossValue);
				switch(value){
					case 0:
						cm.gainItem(item[0],-500);
						cm.getPlayer().addMaxHP(350);
						cm.getPlayer().addQuestsHp(bossValue);
						cm.getPlayer().dropMessage(5, "You've received +350 HP.");
						str = "#e#bCongratz!#k\r\nYou've received +350 HP.\r\n\r\nI hope you will keep getting #rStronger#k.";
						break;
					case 1:
						str = "#e#bGreat Job!#k\r\nYou've received +20 AP.\r\n\r\nI believe you will get #rStronger#k.";
						cm.gainItem(item[0],-500);
						cm.getPlayer().addQuestsHp(bossValue);
						cm.getPlayer().gainAp(20, false);
						cm.getPlayer().dropMessage(5, "You've received +20 AP.");
						break;
					default:
						str = "#bMax Upgraded#k, to be continue...";
						break;
				}
				cm.sendOk(str);
				status = 10;
			}
			else{
				str = "#eSeems like you #bdo not#k have #b500#k #v" + item[0] + "#\r\n\r\nCome back when you have a #rProof#k."
				cm.sendOk(str);
				cm.dispose();
			}
		}else{
			cm.dispose();
		}	
	}
}
