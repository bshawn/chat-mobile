import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import UserScreen from './screens/UserScreen';

import UserStorage from './data/user-storage';

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen }
});

const AppNavigator = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Chat Mobile Demo'
    }
  },
  Chat: { screen: ChatScreen }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        userName: '',
        fullName: ''
      }
    };
  }

  componentDidMount() {
    // Load the user from async storage
    UserStorage.getAppUser()
      .then(user => this.setState({
        user: user
      }))//, () => console.log('User loaded from storage', this.state.user)))
      .catch(error => console.log('Error loading user from storage', error));
  }

  render() {
    return (
      <AppNavigator screenProps={{ appUser: this.state.user }} />
    );
  }
}