/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import constants.game.GameConstants;

/**
 *
 * @author b3i
 */
public class ShowCProgress extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();

        String talkStr = "#e[Weekly Challenge Progress] \r\n\t\t\t\t\t#r"+player.getWCP()*5+"%\r\n#e#k0%#B" + player.getWCP()*5+ "##e#k100%\r\n\r\n";
        talkStr += "On Going Weekly Challenges :\r\n\r\n#n";
        if (c.getPlayer().getMerchOpenW()>= 0) {
            talkStr += "Setup HiredMerchant: #e[#r" + player.OpenMerchW+ "#k#n#e/#e3]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameGivenW()>= 0) {
            talkStr += "Fame Given: #e[#r" + player.FameGivenW+ "#k#n#e/#e5]#k#n" + "\r\n";
        }
        if (c.getPlayer().getZakumKillW()>= 0) {
            talkStr += "Boss Points: #e[#r" + player.ZakumKillW+ "#k#n#e/#e50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getRGachW()>= 0) {
            talkStr += "Gachapon Rare Items Found: #e[#r" + player.RGachW+ "#k#n/#e20]#k#n" + "\r\n";
        }
        if (c.getPlayer().getMiniW()>= 0) {
            talkStr += "Mini-Game Wins: #e[#r" + player.MiniW+ "#k#n#e/#e20]#k#n" + "\r\n";
        }
        if (c.getPlayer().getJQW()>= 0) {
            talkStr += "Jump Quest Points: #e[#r" + player.JQW+ "#k#n#e/50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameW()>= 0) {
            talkStr += "Fame Received: #e[#r" + player.FameW+ "#k#n#e/50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getQuestCW()>= 0) {
            talkStr += "Quests Completed: #e[#r" + player.QuestCW+ "#k#n/#e50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNGachW()>= 0) {
            talkStr += "Gachapon Tickets Used: #e[#r" + player.NGachW+ "#k#n/#e100]#k#n" + "\r\n";
        }
        if (c.getPlayer().getScrollFailW()>= 0) {
            talkStr += "Scroll Fails: #e[#r" + player.ScrollFailW+ "#k#n/#e100]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNXW()>= 0) {
            talkStr += "NX Collected: #e[#r" + GameConstants.numberWithCommas(player.NXW) + "#k#n/#e20,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getSellItemW()>= 0) {
            talkStr += "HiredMerchant Gains: #e[#r" + GameConstants.numberWithCommas(player.SellItemW) + "#k#n#e/#e100,000,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getBoughtItemW()>= 0) {
            talkStr += "[HiredMerchant] Meso Spent: #e[#r" + GameConstants.numberWithCommas(player.BoughtItemW) + "#k#n#e/100,000,000]#k#n" + "\r\n";
        }
        talkStr += "\r\n\r\n[#e#kMonthly's Challenge Progress] \r\n\t\t\t\t\t#r"+player.getMCP()*5+"%\r\n#n#k#e0%#B" + player.getMCP()*5+ "##n#e100%\r\n\r\n#n";
        talkStr += "#e#kOn Going Monthly Challenges :\r\n#n\r\n";
        if (c.getPlayer().getMerchOpenM()>= 0) {
            talkStr += "Setup HiredMerchant: #e[#r" + player.OpenMerchM+ "#k#n#e/#e10]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameGivenM()>= 0) {
            talkStr += "Fame Given: #e[#r" + player.FameGivenM+ "#k#n#e/#e20]#k#n" + "\r\n";
        }
        if (c.getPlayer().getMiniM()>= 0) {
            talkStr += "Mini-Game Wins: #e[#r" + player.MiniM+ "#k#n#e/#e30]#k#n" + "\r\n";
        }
        if (c.getPlayer().getZakumKillM()>= 0) {
            talkStr += "Boss Points: #e[#r" + player.ZakumKillW+ "#k#n#e/#e200]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameM()>= 0) {
            talkStr += "Fame Received: #e[#r" + player.FameM+ "#k#n#e/50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getRGachM()>= 0) {
            talkStr += "Gachapon Rare Items Found: #e[#r" + player.RGachM+ "#k#n/#e100]#k#n" + "\r\n";
        }
        if (c.getPlayer().getJQM()>= 0) {
            talkStr += "Jump Quest Points: #e[#r" + player.JQM+ "#k#n#e/150]#k#n" + "\r\n";
        }
        if (c.getPlayer().getQuestCM()>= 0) {
            talkStr += "Quests Completed: #e[#r" + player.QuestCM+ "#k#n/#e150]#k#n" + "\r\n";
        }
        if (c.getPlayer().getScrollFailM()>= 0) {
            talkStr += "Scroll Fails: #e[#r" + player.ScrollFailM+ "#k#n/#e500]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNGachM()>= 0) {
            talkStr += "Gachapon Tickets Used: #e[#r" + player.NGachM+ "#k#n/#e1,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNXM()>= 0) {
            talkStr += "NX Collected: #e[#r" + GameConstants.numberWithCommas(player.NXM) + "#k#n/#e50,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getSellItemM()>= 0) {
            talkStr += "[HiredMerchant] Gains: #e[#r" + GameConstants.numberWithCommas(player.SellItemM) + "#k#n#e/#e550,000,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getBoughtItemM()>= 0) {
            talkStr += "[HiredMerchant] Meso Spent: #e[#r" + GameConstants.numberWithCommas(player.BoughtItemM) + "#k#n#e/550,000,000]#k#n" + "\r\n";
        }
        c.getAbstractPlayerInteraction().npcTalk(9010000, talkStr);
    }
}
