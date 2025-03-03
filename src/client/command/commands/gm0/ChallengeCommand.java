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
public class ChallengeCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();

        // Weekly's Challenge Progress
        String showMsg_ = "#e#bWeekly Challenge Progress#n#k" + "\r\n\r\n";
        if (c.getPlayer().getMerchOpenW()>= 0) {
            showMsg_ += "Setup HiredMerchant: #e[#r" + player.OpenMerchW+ "#k#n#e/#e3]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameGivenW()>= 0) {
            showMsg_ += "Fame Given: #e[#r" + player.FameGivenW+ "#k#n#e/#e5]#k#n" + "\r\n";
        }
        if (c.getPlayer().getZakumKillW()>= 0) {
            showMsg_ += "Boss Points: #e[#r" + player.ZakumKillW+ "#k#n#e/#e50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getRGachW()>= 0) {
            showMsg_ += "Gachapon Rare Items Found: #e[#r" + player.RGachW+ "#k#n/#e20]#k#n" + "\r\n";
        }
        if (c.getPlayer().getMiniW()>= 0) {
            showMsg_ += "Mini-Game Wins: #e[#r" + player.MiniW+ "#k#n#e/#e20]#k#n" + "\r\n";
        }
        if (c.getPlayer().getJQW()>= 0) {
            showMsg_ += "Jump Quest Points: #e[#r" + player.JQW+ "#k#n#e/50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getFameW()>= 0) {
            showMsg_ += "Fame Received: #e[#r" + player.FameW+ "#k#n#e/50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getQuestCW()>= 0) {
            showMsg_ += "Quests Completed: #e[#r" + player.QuestCW+ "#k#n/#e50]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNGachW()>= 0) {
            showMsg_ += "Gachapon Tickets Used: #e[#r" + player.NGachW+ "#k#n/#e100]#k#n" + "\r\n";
        }
        if (c.getPlayer().getScrollFailW()>= 0) {
            showMsg_ += "Scroll Fails: #e[#r" + player.ScrollFailW+ "#k#n/#e100]#k#n" + "\r\n";
        }
        if (c.getPlayer().getNXW()>= 0) {
            showMsg_ += "NX Collected: #e[#r" + GameConstants.numberWithCommas(player.NXW) + "#k#n/#e20,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getSellItemW()>= 0) {
            showMsg_ += "HiredMerchant Gains: #e[#r" + GameConstants.numberWithCommas(player.SellItemW) + "#k#n#e/#e100,000,000]#k#n" + "\r\n";
        }
        if (c.getPlayer().getBoughtItemW()>= 0) {
            showMsg_ += "HiredMerchant Spent: #e[#r" + GameConstants.numberWithCommas(player.BoughtItemW) + "#k#n#e/#e100,000,000]#k#n" + "\r\n";
        }
        player.showHint(showMsg_, 300);
    }
}

