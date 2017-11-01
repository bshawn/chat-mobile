import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import UserScreen from './screens/UserScreen';

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
