package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import client.inventory.Equip;
import client.inventory.Item;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import com.sun.corba.se.impl.interceptors.SlotTable;
import com.sun.org.apache.bcel.internal.classfile.Constant;
import constants.game.GameConstants;
import constants.inventory.EquipSlot;
import constants.inventory.EquipType;
import net.server.Server;
import net.server.channel.Channel;
import net.server.channel.handlers.InventoryMergeHandler;
import net.server.channel.handlers.InventorySortHandler;
import server.MapleItemInformationProvider;

public class ItemLevelCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient client, String[] params) {
        MapleInventory inv = client.getPlayer().getInventory(MapleInventoryType.getByType((byte)-1));
        String result = "";
        for(Item item : inv.list())
        {
            Equip equippedItem = (Equip) inv.getItem(item.getPosition());
            result += "#e" + MapleItemInformationProvider.getInstance().getName(item.getItemId()) + " - Level: #r" +String.valueOf(equippedItem.getItemLevel()) + "#k\r\n";
        }
        client.getPlayer().showHint(result);
    }
}
