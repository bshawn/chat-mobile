import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a user screen</Text>
      </View>
    );
  }
}