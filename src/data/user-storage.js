import { AsyncStorage } from 'react-native';

const storageKey = 'chat-app-user';

export default class UserStorage {
    static saveAppUser(user) {
        return AsyncStorage.setItem(storageKey, JSON.stringify(user));
    }

    static getAppUser() {
        return AsyncStorage.getItem(storageKey)
            .then(user => JSON.parse(user));
    }
}