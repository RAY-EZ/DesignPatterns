// import * as problem from "./problem";
import { ConfigManager } from "./solution";
//@ts-ignore
title.innerHTML = "Singleton Pattern";

// problem;

const setting = ConfigManager.getInstance();

setting.set("API_KEY", "sk_18a3b8991c");
setting.set("name", "sushil");
console.log(setting.get("name"));

const someone_set_it = ConfigManager.getInstance();
console.log(someone_set_it.get("name"));
