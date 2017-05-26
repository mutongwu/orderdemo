import { AsyncStorage } from 'react-native';

export default {

	KEY: 'id_token',

	async getToken(){
		try {
	      const token = await AsyncStorage.getItem(this.KEY);
	      return token;
	    } catch (error) {
	      console.log('AsyncStorage error: ' + error.message);
	      return null;
	    }
	},
	async setToken(val){
		try {
	      await AsyncStorage.setItem(this.KEY, val);
	      return val;
	    } catch (error) {
	      console.log('AsyncStorage error: ' + error.message);
	      return null;
	    }
	},
	async delToken(){
		try {
	      await AsyncStorage.removeItem(this.KEY);
	      return val;
	    } catch (error) {
	      console.log('AsyncStorage error: ' + error.message);
	      return null;
	    }
	}
};