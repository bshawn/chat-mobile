import React from 'react';
import { Text } from 'react-native';

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat'
    }

    render() {
        return (
            <Text>This is a chat screen</Text>
        );
    }
}