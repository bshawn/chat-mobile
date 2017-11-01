import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import FullPageSpinner from '../common/FullPageSpinner';
import UserService from '../common/user-service';
import UserStorage from '../common/user-storage';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User'
  }

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      userName: '',
      fullName: '',
      userNameError: '',
      screenError: '',
      isDirty: false,
      isLoading: true
    };

    this.userNameChanged = this.userNameChanged.bind(this);
    this.fullNameChanged = this.fullNameChanged.bind(this);
    this.savePressed = this.savePressed.bind(this);
  }

  componentDidMount() {
    // Load the user's data from storage.
    UserStorage.getAppUser()
      .then(userId => {
        console.log('userId', userId);
        if (!userId) {
          return Promise.resolve(userId);
        } else {
          return UserService.getUserById(userId)
            .then(response => response.json())
            .then(data => {
              this.setState({
                id: data.id,
                userName: data.userName,
                fullName: data.fullName
              });
            });
        }
      })
      .then(() => {
        this.setState({
          isLoading: false,
          screenError: '',
          userError: '',
          isDirty: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          screenError: error
        });
      });
  }

  userNameChanged(value) {
    this.setState({ userName: value, isDirty: true });
    // console.log('New user name: ', value);
  }

  fullNameChanged(value) {
    this.setState({ fullName: value, isDirty: true });
    // console.log('New name: ', value);
  }

  savePressed() {
    if (!this.state.isDirty) { return; }

    this.setState({ isLoading: true });

    const user = {
      id: this.state.id,
      userName: this.state.userName,
      fullName: this.state.fullName
    };

    const save = this.state.id ? UserService.updateUser : UserService.createUser;

    save(user)
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data.id,
          userName: data.userName,
          fullName: data.fullName,
          isDirty: false,
          isLoading: false,
          screenError: '',
          userError: ''
        });

        // Update storage
        return UserStorage.saveAppUser(data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          screenError: error
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <FullPageSpinner />;
    }
    return (
      <View style={styles.container}>
        <FormLabel>User Name</FormLabel>
        <FormInput
          placeholder="Specify a user name"
          value={this.state.userName}
          onChangeText={this.userNameChanged}
        />
        {
          this.state.userNameError ?
            <FormValidationMessage>{this.state.userNameError}</FormValidationMessage> :
            null
        }
        <FormLabel>Full Name</FormLabel>
        <FormInput
          placeholder="Specify your full name (Optional)"
          value={this.state.fullName}
          onChangeText={this.fullNameChanged}
        />
        <View style={styles.buttons}>
          <Button
            title="Save"
            onPress={this.savePressed}
          />
        </View>
        {
          this.state.screenError ?
            <FormValidationMessage>{this.state.screenError}</FormValidationMessage> :
            null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttons: {
    paddingTop: 20
  }
});