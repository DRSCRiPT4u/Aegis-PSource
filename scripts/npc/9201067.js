//Winter Gachaphon

var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("#eCya Later !");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("#eHello #k#d#h ##k, #k I'm the #bGolden #kGachapon.\r\ndo you have #b#z4031284##k ?");

			}
		else if (status == 1) {
			if (cm.haveItem(4031284)) {
			cm.sendYesNo("#eYou can gain item for #b#z4031284# ?");
			}
			else if (!cm.haveItem(4031284)) {
			cm.sendOk("#r#eYou don't have #b#z4031284#! #k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031284, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2000004, itemamount);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2000005, itemamount);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2000006, itemamount);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2002015, itemamount);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2022544, itemamount);
			}
			else if (itemchance == 72) {
			cm.gainItem(1051017, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(1082002, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(1050018, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(1002577, 1);
			}
			else if (itemchance == 76) {
			cm.gainItem(1002578, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(1002579, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(1002580, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(1082150, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(2030007, 3);
			}	
			else if (itemchance == 81) {
			cm.gainItem(2030020, 3);
			}
			else if (itemchance == 82) {
			cm.gainItem(1062153, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(1092019, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(1092022, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(5041000, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(2022184, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(2022184, 1);
			}	
			else if (itemchance == 88) {
			cm.gainItem(1062153, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(5010080, 1);
			}
			else if (itemchance == 95) {
			cm.gainItem(1092052, 1);
			}
			else if (itemchance == 96) {
			cm.gainItem(1092067, 1);
			}
			else if (itemchance == 97) {
			cm.gainItem(4010000, 1);
			}
			else if (itemchance == 98) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 99) {
			cm.gainItem(2000004, 3);
			}
			else if (itemchance == 100) {
			cm.gainItem(4010006, 1);
			}
			else if (itemchance == 101) {
			cm.gainItem(1122081, 1);
			}
			else if (itemchance == 102) {
			cm.gainItem(4010004, 1);
			}
			else if (itemchance == 103) {
			cm.gainItem(5041000, 1);
			}
			else if (itemchance == 104) {
			cm.gainItem(2040805, 1);
			}
			else if (itemchance == 105) {
			cm.gainItem(2040816, 1);
			}
			else if (itemchance == 106) {
			cm.gainItem(2040834, 1);
			}
			else if (itemchance == 107) {
			cm.gainItem(4010006, 2);
			}
			else if (itemchance == 108) {
			cm.gainItem(2000005, 15);
			}
			else if (itemchance == 109) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 110) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 111) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 112) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 113) {
			cm.gainItem(2000004, 5);
			}
			else if (itemchance == 114) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 115) {
			cm.gainItem(2000005, 5);
			}
			else if (itemchance == 116) {
			cm.gainItem(2000005, 3);
			}
			else if (itemchance == 117) {
			cm.gainItem(2000005, 3);
			}
			else if (itemchance == 118) {
			cm.gainItem(2000005, 8);
			}
			else if (itemchance == 119) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 120) {
			cm.gainItem(4010005, 3);
			}
			else if (itemchance == 121) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 122) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 123) {
			cm.gainItem(5072000, 1);
			}
			else if (itemchance == 124) {
			cm.gainItem(5072000, 1);
			}
			else if (itemchance == 125) {
			cm.gainItem(5072000, 1);
			}
			else if (itemchance == 126) {
			cm.gainItem(1302087, 1);
			}
			else if (itemchance == 127) {
			cm.gainItem(1002609, 1);
			}
			else if (itemchance == 128) {
			cm.gainItem(1492078, 1);
			}
			else if (itemchance == 129) {
			cm.gainItem(3015122, 1);
			}
			else if (itemchance == 130) {
			cm.gainItem(1382046, 1);
			}
			else if (itemchance == 131) {
			cm.gainItem(1382047, 1);
			}
			else if (itemchance == 132) {
			cm.gainItem(1089543, 1);
			}
			else if (itemchance == 133) {
			cm.gainItem(1382049, 1);
			}
			else if (itemchance == 134) {
			cm.gainItem(1382050, 1);
			}
			else if (itemchance == 135) {
			cm.gainItem(1382051, 1);
			}
			else if (itemchance == 136) {
			cm.gainItem(1382052, 1);
			}
			else if (itemchance == 137) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 138) {
			cm.gainItem(1002799, 1);
			}
			else if (itemchance == 139) {
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 140) {
			cm.gainItem(5041000, 1);
			}
			else if (itemchance == 141) { 
			cm.gainItem(4010004, 2);
			}
			else if (itemchance == 142) { 
			cm.gainItem(4010003, 3);
			}
			else if (itemchance == 143) { 
			cm.gainItem(2000004, 5);
			}
			else if (itemchance == 144) { 
			cm.gainItem(4010002, 2);
			}
			else if (itemchance == 145) { 
			cm.gainItem(4010001, 2);
			}
			else if (itemchance == 146) { 
			cm.gainItem(4010000, 3);
			}
			else if (itemchance == 147) {
			cm.gainItem(2022002, 3);
			}
			else if (itemchance == 148) { 
			cm.gainItem(1332242, 1);
			}
			else if (itemchance == 149) { 
			cm.gainItem(2022002, 3);
			}
			else if (itemchance == 150) { 
			cm.gainItem(1472054, 1);
			}
			else if (itemchance == 151) { 
			cm.gainItem(2022069, 2);
			}
			else if (itemchance == 152) { 
			cm.gainItem(5041000, 1);
			}
			else if (itemchance == 153) { 
			cm.gainItem(2000005, 5);
			}
			else if (itemchance == 154) { 
			cm.gainItem(1072429, 1);
			}
			else if (itemchance == 155) { 
			cm.gainItem(1072430, 1);
			}
			else if (itemchance == 156) { 
			cm.gainItem(1072431, 1);
			}
			else if (itemchance == 157) { 
			cm.gainItem(1072432, 1);
			}
			else if (itemchance == 158) { 
			cm.gainItem(1012076, 1);
			}
			else if (itemchance == 159) { 
			cm.gainItem(1012077, 1);
			}
			else if (itemchance == 160) { 
			cm.gainItem(1082145, 1);
			}
			else if (itemchance == 161) { 
			cm.gainItem(1082146, 1);
			}
			else if (itemchance == 162) { 
			cm.gainItem(1082147, 1);
			}
			else if (itemchance == 163) { 
			cm.gainItem(1082148, 1);
			}
			else if (itemchance == 164) { 
			cm.gainItem(1082149, 1);
			}
            			else if (itemchance == 165) { 
			cm.gainItem(1082150, 1);
			}
			else if (itemchance == 166) { 
			cm.gainItem(1089543, 1);
			}
			else if (itemchance == 167) { 
			cm.gainItem(1102000, 1);
			}
			else if (itemchance == 168) { 
			cm.gainItem(1102001, 1);
			}
			else if (itemchance == 169) { 
			cm.gainItem(1102002, 1);
			}
			else if (itemchance == 170) { 
			cm.gainItem(1102003, 1);
			}
			else if (itemchance == 171) { 
			cm.gainItem(1102004, 1);
			}
			else if (itemchance == 172) { 
			cm.gainItem(1102040, 1);
			}
			else if (itemchance == 173) { 
			cm.gainItem(1102043, 1);
			}
			else if (itemchance == 174) { 
			cm.gainItem(1022058, 1);
			}
			else if (itemchance == 175) { 
			cm.gainItem(1022060, 1);
			}
			else if (itemchance == 176) { 
			cm.gainItem(1302095, 1);
			}
			else if (itemchance == 177) { 
			cm.gainItem(1302024, 1);
			}
			else if (itemchance == 178) { 
			cm.gainItem(1002677, 1);
			}
			else if (itemchance == 179) { 
			cm.gainItem(1002418, 1);
			}
			else if (itemchance == 180) { 
			cm.gainItem(2043305, 1);
			}
			else if (itemchance == 181) { 
			cm.gainItem(2043705, 1);
			}
			else if (itemchance == 182) { 
			cm.gainItem(2044005, 1);
			}
			else if (itemchance == 183) { 
			cm.gainItem(2044505, 1);
			}
			else if (itemchance == 184) { 
			cm.gainItem(2044705, 1);
			}
			else if (itemchance == 185) { 
			cm.gainItem(2044605, 1);
			}
			else if (itemchance == 186) { 
			cm.gainItem(2044804, 1);
			}
			else if (itemchance == 187) { 
			cm.gainItem(2044904, 1);
			}
			else if (itemchance == 188) { 
			cm.gainItem(2043113, 1);
			}
			else if (itemchance == 189) { 
			cm.gainItem(2040834, 1);
			}
			else if (itemchance == 190) { 
			cm.gainItem(2041027, 1);
			}
			else if (itemchance == 191) { 
			cm.gainItem(2041029, 1);
			}
			else if (itemchance == 192) { 
			cm.gainItem(2041033, 1);
			}
			else if (itemchance == 193) { 
			cm.gainItem(2041035, 1);
			}
			else if (itemchance == 194) { 
			cm.gainItem(2041037, 1);
			}
			else if (itemchance == 195) { 
			cm.gainItem(2041039, 1);
			}
			else if (itemchance == 196) { 
			cm.gainItem(2041041, 1);
			}
			else if (itemchance == 197) { 
			cm.gainItem(4031408, 1);
			}
			else if (itemchance == 198) { 
			cm.gainItem(4310209, 1);
			}
			else if (itemchance == 199) { 
			cm.gainItem(2000005, 10);
			}
			else if (itemchance == 200) { 
			cm.gainItem(2000004, 10);
			}
			else if (itemchance == 201) { 
			cm.gainItem(2020014, 10);
			}
			else if (itemchance == 202) { 
			cm.gainItem(2020015, 10);
			}
			else if (itemchance == 203) { 
			cm.gainItem(2050004, 5);
			}
			else if (itemchance == 204) { 
			cm.gainItem(2022247, 10);
			}
			else if (itemchance == 205) { 
			cm.gainItem(2022248, 10);
			}
			else if (itemchance == 206) { 
			cm.gainItem(2022249, 10);
			}
			else if (itemchance == 207) { 
			cm.gainItem(2022250, 10);
			}
			else if (itemchance == 208) { 
			cm.gainItem(2022184, 3);
			}
			else if ((itemchance >= 209) && (itemchance <= 215)) { 
			cm.gainItem(2022545, 3);
			}
			else if ((itemchance >= 216) && (itemchance <= 221)) { 
			cm.gainItem(2022065, 5);
			}
			else if ((itemchance >= 222) && (itemchance <= 228)) { 
			cm.gainItem(2022066, 5);
			}
			else if ((itemchance >= 228) && (itemchance <= 240)) { 
			cm.gainItem(2022538, 5);
			}
			else if (itemchance >= 228) { 
			cm.gainItem(2030007, 3);
			}
			cm.broadcastMessage(6, "[Gachapon Notice]:" + cm.getPlayer().getName() + " has obtained a item from the Golden Gachapon !");
			cm.dispose();
		}
	}
}
