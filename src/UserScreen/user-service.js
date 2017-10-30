import ServiceBase from '../common/service-base';

export default class UserService extends ServiceBase {

    static getAllUsers() {
        return super.get('api/users');
    }

    static getUserById(id) {
        return super.get(`/api/users/${id}`);
    }

    static getUserByUserName(userName) {

    }

    static createUser(user) {

    }

    static updateUser(user) {

    }
}