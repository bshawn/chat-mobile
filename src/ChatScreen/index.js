import React from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

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
    this.setState({
      messages: [
        {
          _id: 'abcdef1234',
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 'abcdef12456',
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ]
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