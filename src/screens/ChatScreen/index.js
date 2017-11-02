import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import MessageService from '../../data/message-service';

import styles from '../styles';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat'
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    this.loadMessages();
  }

  loadMessages() {
    MessageService.getAllMessages()
      .then(response => response.json())
      .then(data => {
        return data.map(message => {
          return {
            _id: message.id,
            text: message.text,
            createdAt: message.timestamp,
            user: {
              _id: message.senderId,
              name: message.senderDetails.fullName || message.senderDetails.userName
            }
          }
        });
      })
      .then(messages => this.setState({ messages: messages }))
      .catch(error => console.log('Error loading messages', error));
  }

  onSend(messages = []) {
    const appUser = this.props.screenProps.appUser;
    let seed = {
      text: '',
      timestamp: new Date(),
      senderId: appUser.id
    };

    const message = messages.reduce((agg, m, i) => {
      let line = i !== 0 ? '\n' + m.text : m.text;
      agg.text += line
      return agg;
    }, seed);

    MessageService.sendMessage(message)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Error sending message', error))
      .then(() => this.loadMessages());
  }

  render() {
    const appUser = this.props.screenProps.appUser;
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: appUser.id
        }}
      />
    );
  }
}