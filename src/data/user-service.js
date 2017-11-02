import ServiceBase from './service-base';

export default class UserService extends ServiceBase {
  static createUser(user) {
    const url = 'api/users';
    return super.post(url, user);
  }

  static updateUser(user) {
    const url = `api/users/${user.id}`;
    return super.put(url, user);
  }
}