package scripting;

import client.MapleClient;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.script.*;

import constants.net.ServerConstants;
import jdk.nashorn.api.scripting.NashornScriptEngine;
import tools.FilePrinter;

/**
 *
 * @author Matze
 */
public abstract class AbstractScriptManager {
    private ScriptEngineFactory sef;

    protected AbstractScriptManager() {
        sef = new ScriptEngineManager().getEngineByName("javascript").getFactory();
    }

    protected NashornScriptEngine getScriptEngine(String path) {
        path = "scripts/" + path;
        File scriptFile = new File(path);
        if (!scriptFile.exists()) {
            return null;
        }
        NashornScriptEngine engine = (NashornScriptEngine) sef.getScriptEngine();
        try (FileReader fr = new FileReader(scriptFile)) {
            if (ServerConstants.JAVA_8){
                engine.eval("load('nashorn:mozilla_compat.js');" + System.lineSeparator());
            }
            engine.eval(fr);
        } catch (final ScriptException | IOException t) {
            FilePrinter.printError(FilePrinter.INVOCABLE + path.substring(12), t, path);
            return null;
        }

        return engine;
    }

    protected NashornScriptEngine getScriptEngine(String path, MapleClient c) {
        NashornScriptEngine engine = c.getScriptEngine("scripts/" + path);
        if (engine == null) {
            engine = getScriptEngine(path);
            c.setScriptEngine(path, engine);
        }

        return engine;
    }

    protected void resetContext(String path, MapleClient c) {
        c.removeScriptEngine("scripts/" + path);
    }
}
