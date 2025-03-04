function enter(pi) {
    pi.removeAll(4001162);
    pi.removeAll(4001163);
    pi.removeAll(4001164);
    pi.removeAll(4001169);
    pi.removeAll(2270004);
    
    var spring = pi.getMap().getReactorById(3008000);  //
    if(spring != null && spring.getState() > 0) {
        if(!pi.canHold(4001198, 1)) {
            pi.playerMessage(5, "Check for a free space on your ETC inventory before entering this portal.");
            return false;
        }
        
        pi.gainItem(4001198, 1);
    }
    
    pi.playPortalSound(); pi.warp(300030100,0);
    return true;
}