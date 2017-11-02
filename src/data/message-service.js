import ServiceBase from './service-base';

export default class MessageService extends ServiceBase {
  static getAllMessages() {
    const url = 'api/messages';
    return super.get(url);
  }

  static sendMessage(message) {
    const url = 'api/messages';
    return super.post(url, message);
  }
}