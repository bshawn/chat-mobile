import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>This is my line of text</Text>
        <Button
          title="Let's Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
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

class UserScreen extends React.Component {
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

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen }
});

export default App = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Chat Mobile Demo'
    }
  },
  Chat: { screen: ChatScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
