import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import ChatScreen from './ChatScreen';

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen }
})

export default App = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Chat Mobile Demo'
    }
  },
  Chat: { screen: ChatScreen }
});