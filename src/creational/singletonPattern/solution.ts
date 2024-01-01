//
export class ConfigManager {
  private settings: Map<string, any> = new Map();
  private static instance: ConfigManager = new ConfigManager();
  // private constructor(){
  // can make constructor private
  // class cannot be initialized
  // }
  private constructor() {}
  public static getInstance() {
    return ConfigManager.instance;
  }
  public set(key: string, value: any) {
    console.log("config added ", key, value);
    this.settings.set(key, value);
  }

  public get(key: string) {
    return this.settings.get(key);
  }
}

// eg .. use case
