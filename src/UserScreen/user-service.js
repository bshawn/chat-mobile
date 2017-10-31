import ServiceBase from '../common/service-base';

export default class UserService extends ServiceBase {

    static getAllUsers() {
        return super.get('api/users');
    }

    static getUserById(id) {
        return super.get(`/api/users/${id}`);
    }

    static createUser(user) {
        return super.post(`/api/users`, user);
    }

    static updateUser(user) {
        return super.put(`/api/users/${user.id}`, user);
    }
}