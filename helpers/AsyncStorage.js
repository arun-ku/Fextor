import Storage from "react-native-storage";
import AsyncStorageBE from "@react-native-async-storage/async-storage";

class AsyncStorage {
  storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorageBE,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
  });

  setItem = async (key, value) => {
    // await this.storage.save({
    //   key,
    //   data: value,
    // });

    await AsyncStorageBE.setItem(key, value);
  };

  getItem = async (key) => {
    // return await this.storage.load({
    //   key,
    // });
    let ret = null;
    try {
      ret = await AsyncStorageBE.getItem(key);
    } catch (e) {
      console.log(e, "####");
    }
    
    return ret;
  };

  removeItem = async (key) => {
    await this.storage.remove({
      key,
    });
  };
}

export default new AsyncStorage();
