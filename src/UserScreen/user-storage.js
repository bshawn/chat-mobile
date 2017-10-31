import { AsyncStorage } from 'react-native';

const chatAppUserKey = 'chat-app-user';

export default class UserStorage {
    static saveAppUser(user) {
        return AsyncStorage.setItem(chatAppUserKey, user.id);
    }

    static getAppUser() {
        return AsyncStorage.getItem(chatAppUserKey);
    }
}