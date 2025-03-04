package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

public class ReadPointsCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient client, String[] params) {

        MapleCharacter player = client.getPlayer();
        if (params.length > 2) {
            player.yellowMessage("Syntax: @points (rp|vp|donor|all)");
            return;
        } else if (params.length == 0) {
            player.yellowMessage("RewardPoints: " + player.getRewardPoints() + " | "
                    + "VotePoints: " + player.getClient().getVotePoints() + " | AegisPoints: " + player.getAegisPoints() + " |  DonorPoints: " +
                    player.getDonorPoints());
    
            int points = player.getAegisPoints();
            return;
        }

        switch (params[0]) {
            case "rp":
                player.yellowMessage("RewardPoints: " + player.getRewardPoints());
                break;
            case "vp":
                player.yellowMessage("VotePoints: " + player.getClient().getVotePoints());
                break;
            case "donor":
                player.yellowMessage("DonorPoints: " + player.getDonorPoints());
                break;
            default:
                player.yellowMessage("RewardPoints: " + player.getRewardPoints() + " | "
                        + "VotePoints: " + player.getClient().getVotePoints() + " | AegisPoints: " + player.getAegisPoints() + " |  DonorPoints: " +
                        player.getDonorPoints());
                break;
        }
    }
}