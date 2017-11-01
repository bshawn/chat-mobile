import React from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import MessageService from '../common/message-service';

const user = {
  id: '59f9d8701484d3002660db6f'
};

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat'
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    MessageService.getAllMessages()
      .then(response => response.json())
      .then((data) => {
        // console.log('data', data);

        return data.map(message => {
          return {
            _id: message.id,
            createdAt: message.timestamp,
            text: message.text,
            user: {
              _id: message.senderId
            }
          };
        });
      })
      .then(messages => this.setState({ messages: messages }))
      .catch(error => {
        console.log('Error loading messages', error);
        this.sendMessages([{
          _id: 'system',
          text: error.toString(),
          system: true
        }]);
      });
  }

  sendMessages(messages = []) {
    let seed = {
      text: '',
      timestamp: new Date(),
      senderId: user.id
    };

    const message = messages.reduce((agg, m, i) => {
      let line = i !== 0 ? '\n' + m.text : m.text;
      agg.text += line
      return agg;
    }, seed);

    MessageService.sendMessage(message)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Error sending message', error));

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  onSend(messages = []) {
    this.sendMessages(messages);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: user.id
        }}
      />
    );
  }
}