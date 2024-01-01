// problem
// for example we try to store the config file
// it needs to be initialized only once
// we want our data to be stored at a single place not at
// multiple places

// export class ConfigManager {
//   private settings: Map<string, any> = new Map();

//   public set(key: string, value: any) {
//     console.log("config added ", key, value);
//     this.settings.set(key, value);
//   }

//   public get(key: string) {
//     return this.settings.get(key);
//   }
// }

// // eg .. use case
// const setting = new ConfigManager();
// setting.set("API_KEY", "sk_18a3b8991c");
// setting.set("name", "sushil");
// console.log(setting.get("name"));

// const someone_set_it = new ConfigManager();
// console.log(someone_set_it.get("name"));
