/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation version 3 as published by
the Free Software Foundation. You may not use, modify or distribute
this program under any other version of the GNU Affero General Public
License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package client.inventory;

import client.inventory.manipulator.MapleKarmaManipulator;
import constants.inventory.ItemConstants;
import server.MapleItemInformationProvider;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class Item implements Comparable<Item> {

    private static final AtomicInteger runningCashId = new AtomicInteger(777000000);  // pets & rings shares cashid values
    protected List<String> log;
    private final int id;
    private int cashId;
    private int sn;
    private short position;
    private short quantity;
    private int petid = -1;
    private MaplePet pet = null;
    private String owner = "";
    private short flag;
    private long expiration = -1;
    private boolean donor;
    private String giftFrom = "";

    public Item(int id, short position, short quantity) {
        this.id = id;
        this.position = position;
        this.quantity = quantity;
        this.log = new LinkedList<>();
        this.flag = 0;
        this.donor = false;
    }

    public Item(int id, short position, short quantity, int petid) {
        this.id = id;
        this.position = position;
        this.quantity = quantity;
        if (petid > -1) {   // issue with null "pet" having petid > -1 found thanks to MedicOP
            this.pet = MaplePet.loadFromDb(id, position, petid);
            if (this.pet == null) {
                petid = -1;
            }
        }
        this.petid = petid;
        this.flag = 0;
        this.donor = false;
        this.log = new LinkedList<>();
    }

    public Item copy() {
        Item ret = new Item(id, position, quantity, petid);
        ret.flag = flag;
        ret.owner = owner;
        ret.expiration = expiration;
        ret.log = new LinkedList<>(log);
        return ret;
    }

    public int getItemId() {
        return id;
    }

    public int getCashId() {
        if (cashId == 0) {
            cashId = runningCashId.getAndIncrement();
        }
        return cashId;
    }
    public boolean isDonor() {
        return this.donor;
    }
    public void setDonor(boolean donor) {
        this.donor = donor;
    }
    public short getPosition() {
        return position;
    }

    public void setPosition(short position) {
        this.position = position;
        if (this.pet != null) this.pet.setPosition(position);
    }

    public short getQuantity() {
        return quantity;
    }

    public void setQuantity(short quantity) {
        this.quantity = quantity;
    }

    public MapleInventoryType getInventoryType() {
        return ItemConstants.getInventoryType(id);
    }

    public byte getItemType() { // 1: equip, 3: pet, 2: other
        if (getPetId() > -1) {
            return 3;
        }
        return 2;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public int getPetId() {
        return petid;
    }

    @Override
    public int compareTo(Item other) {
        if (this.id < other.getItemId()) {
            return -1;
        } else if (this.id > other.getItemId()) {
            return 1;
        }
        return 0;
    }

    @Override
    public String toString() {
        return "Item: " + id + " quantity: " + quantity;
    }

    public List<String> getLog() {
        return Collections.unmodifiableList(log);
    }

    public short getFlag() {
        return flag;
    }

    public void setFlag(short b) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.isAccountRestricted(id)) {
            b |= ItemConstants.ACCOUNT_SHARING; // thanks Shinigami15 for noticing ACCOUNT_SHARING flag not being applied properly to items server-side
        }

        this.flag = b;
    }

    public long getExpiration() {
        return expiration;
    }

    public void setExpiration(long expire) {
        this.expiration = !ItemConstants.isPermanentItem(id) ? expire : ItemConstants.isPet(id) ? Long.MAX_VALUE : -1;
    }

    public int getSN() {
        return sn;
    }

    public void setSN(int sn) {
        this.sn = sn;
    }

    public String getGiftFrom() {
        return giftFrom;
    }

    public void setGiftFrom(String giftFrom) {
        this.giftFrom = giftFrom;
    }

    public MaplePet getPet() {
        return pet;
    }

    public boolean isUntradeable() {
        return ((this.getFlag() & ItemConstants.UNTRADEABLE) == ItemConstants.UNTRADEABLE) || (MapleItemInformationProvider.getInstance().isDropRestricted(this.getItemId()) && !MapleKarmaManipulator.hasKarmaFlag(this));
    }
}
