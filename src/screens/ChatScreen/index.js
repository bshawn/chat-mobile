import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a chat screen</Text>
      </View>
    );
  }
}