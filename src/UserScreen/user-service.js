import ServiceBase from '../common/service-base';

export default class UserService extends ServiceBase {
    static getUserById(id) {
        const base = super.getBaseUri();
        const url = `${base}/api/users/${id}`;
        return fetch({
            method: 'get',
            url: url
        });
    }

    static getUserByUserName(userName) {

    }

    static createUser(user) {

    }

    static updateUser(user) {

    }
}