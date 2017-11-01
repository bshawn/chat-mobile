import ServiceBase from '../common/service-base';

export default class ChatService extends ServiceBase {

    static getAllMessages() {
        return super.get('api/messages');
    }
}