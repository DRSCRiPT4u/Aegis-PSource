/*
    This file is part of the MapleAegis MapleAegis Server
    Copyleft (L) 2016 - 2019 DrScript

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
package client.creator;

import client.MapleJob;
import client.Skill;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import config.YamlConfig;
import tools.Pair;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author DrScript
 */
public class CharacterFactoryRecipe {
    private final MapleJob job;
    private final int level;
    private final int map;
    private final int top;
    private final int bottom;
    private final int shoes;
    private final int weapon;
    private int str = 4, dex = 4, int_ = 4, luk = 4;
    private int maxHp = 50, maxMp = 5;
    private int ap = 0, sp = 0;
    private int meso = 0;
    private final List<Pair<Skill, Integer>> skills = new LinkedList<>();

    private final List<Pair<Item, MapleInventoryType>> itemsWithType = new LinkedList<>();
    private final Map<MapleInventoryType, AtomicInteger> runningTypePosition = new LinkedHashMap<>();

    public CharacterFactoryRecipe(MapleJob job, int level, int map, int top, int bottom, int shoes, int weapon) {
        this.job = job;
        this.level = level;
        this.map = map;
        this.top = top;
        this.bottom = bottom;
        this.shoes = shoes;
        this.weapon = weapon;

        if (!YamlConfig.config.server.USE_STARTING_AP_4) {
            if (YamlConfig.config.server.USE_AUTOASSIGN_STARTERS_AP) {
                str = 12;
                dex = 5;
            } else {
                ap = 9;
            }
        }
    }

    public void addStartingSkillLevel(Skill skill, int level) {
        skills.add(new Pair<>(skill, level));
    }

    public void addStartingEquipment(Item eqpItem) {
        itemsWithType.add(new Pair<>(eqpItem, MapleInventoryType.EQUIP));
    }

    public void addStartingItem(int itemid, int quantity, MapleInventoryType itemType) {
        AtomicInteger p = runningTypePosition.get(itemType);
        if (p == null) {
            p = new AtomicInteger(0);
            runningTypePosition.put(itemType, p);
        }

        itemsWithType.add(new Pair<>(new Item(itemid, (short) p.getAndIncrement(), (short) quantity), itemType));
    }

    public MapleJob getJob() {
        return job;
    }

    public int getLevel() {
        return level;
    }

    public int getMap() {
        return map;
    }

    public int getTop() {
        return top;
    }

    public int getBottom() {
        return bottom;
    }

    public int getShoes() {
        return shoes;
    }

    public int getWeapon() {
        return weapon;
    }

    public int getStr() {
        return str;
    }

    public void setStr(int v) {
        str = v;
    }

    public int getDex() {
        return dex;
    }

    public void setDex(int v) {
        dex = v;
    }

    public int getInt() {
        return int_;
    }

    public void setInt(int v) {
        int_ = v;
    }

    public int getLuk() {
        return luk;
    }

    public void setLuk(int v) {
        luk = v;
    }

    public int getMaxHp() {
        return maxHp;
    }

    public void setMaxHp(int v) {
        maxHp = v;
    }

    public int getMaxMp() {
        return maxMp;
    }

    public void setMaxMp(int v) {
        maxMp = v;
    }

    public int getRemainingAp() {
        return ap;
    }

    public void setRemainingAp(int v) {
        ap = v;
    }

    public int getRemainingSp() {
        return sp;
    }

    public void setRemainingSp(int v) {
        sp = v;
    }

    public int getMeso() {
        return meso;
    }

    public void setMeso(int v) {
        meso = v;
    }

    public List<Pair<Skill, Integer>> getStartingSkillLevel() {
        return skills;
    }

    public List<Pair<Item, MapleInventoryType>> getStartingItems() {
        return itemsWithType;
    }
}
