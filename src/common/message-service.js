import ServiceBase from '../common/service-base';

export default class MessageService extends ServiceBase {

    static getAllMessages() {
        return super.get('api/messages');
    }

    static sendMessage(message) {
        return super.post('api/messages', message);
    }
}