import React from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import ChatService from '../common/chat-service';

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
    ChatService.getAllMessages()
      .then(() => Promise.reject('An unexpected error occurred'))
      .then(response => response.json())
      .then((data) => {
        // console.log('data', data);
        return data.map(message => {
          return {
            _id: message.id,
            createdAd: message.timeStamp,
            text: message.text,
            user: {
              _id: message.senderId
            }
          };
        });
      })
      .then(messages => this.setState({ messages: messages }))
      .catch(error => {
        this.onSend([{
          _id: 'system',
          text: error,
          system: true
        }]);
      });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 'abcdef12455'
        }}
      />
    );
  }
}