//import EncryptedStorage from 'react-native-encrypted-storage';

class PersistanceHelper {
  accessToken = undefined;
  setValue = (key, value) => {
    try {
      //   EncryptedStorage.setItem(key, value);

      console.log('written successfully');
    } catch (e) {
      console.log(e);
    }
  };

  getValue = async (key, success, failure) => {
    try {
      //   const value = await EncryptedStorage.getItem(key);
      //   return value;
    } catch (ex) {
      console.log(ex);
    }
  };

  setObject = (key, Object) => {
    this.setValue(key, JSON.stringify(Object));
  };
  getObject = async key => {
    const val = await this.getValue(key);
    return JSON.parse(val);
  };
}
export default new PersistanceHelper();
