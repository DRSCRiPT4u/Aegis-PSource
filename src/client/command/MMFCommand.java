/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.command;

import client.MapleClient;

/**
 *
 * @author User
 */
class MMFCommand extends Command {
    {
        setDescription("");
    }
        @Override
    public void execute(MapleClient client, String[] params) {
        client.getAbstractPlayerInteraction().openNpc(9000069, "mmf");
    }
}
