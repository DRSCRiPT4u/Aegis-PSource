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
package net.server.coordinator.login;

import config.YamlConfig;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

import net.server.Server;

/**
 *
 * @author DrScript
 */
public class LoginStorage {
    
    private ConcurrentHashMap<Integer, List<Long>> loginHistory = new ConcurrentHashMap<>();
    
    public boolean registerLogin(int accountId) {
        List<Long> accHist = loginHistory.get(accountId);
        if (accHist == null) {
            accHist = new LinkedList<Long>();
            loginHistory.put(accountId, accHist);
        }
        
        synchronized (accHist) {
            if (accHist.size() > YamlConfig.config.server.MAX_ACCOUNT_LOGIN_ATTEMPT) {
                long blockExpiration = Server.getInstance().getCurrentTime() + YamlConfig.config.server.LOGIN_ATTEMPT_DURATION;
                Collections.fill(accHist, blockExpiration);

                return false;
            }
            
            accHist.add(Server.getInstance().getCurrentTime() + YamlConfig.config.server.LOGIN_ATTEMPT_DURATION);
            return true;
        }
    }
    
    public void updateLoginHistory() {
        long timeNow = Server.getInstance().getCurrentTime();
        List<Integer> toRemove = new LinkedList<>();
        List<Long> toRemoveAttempt = new LinkedList<>();
        
        for (Entry<Integer, List<Long>> loginEntries : loginHistory.entrySet()) {
            toRemoveAttempt.clear();
            
            List<Long> accAttempts = loginEntries.getValue();
            synchronized (accAttempts) {
                for (Long loginAttempt : accAttempts) {
                    if (loginAttempt < timeNow) {
                        toRemoveAttempt.add(loginAttempt);
                    }
                }

                if (!toRemoveAttempt.isEmpty()) {
                    for (Long trAttempt : toRemoveAttempt) {
                        accAttempts.remove(trAttempt);
                    }

                    if (accAttempts.isEmpty()) {
                        toRemove.add(loginEntries.getKey());
                    }
                }
            }
        }
        
        for (Integer tr : toRemove) {
            loginHistory.remove(tr);
        }
    }
}
