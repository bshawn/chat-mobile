import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

import UserService from '../../data/user-service';
import UserStorage from '../../data/user-storage';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User'
  };

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      userName: '',
      fullName: '',
      message: ''
    };

    this.onUserNameChanged = this.onUserNameChanged.bind(this);
    this.onFullNameChanged = this.onFullNameChanged.bind(this);
    this.onSavePressed = this.onSavePressed.bind(this);
  }

  onUserNameChanged(value) {
    this.setState({
      userName: value
    });
  }

  onFullNameChanged(value) {
    this.setState({
      fullName: value
    });
  }

  onSavePressed() {
    const user = this.packageUser();
    const save = !user.id ? UserService.createUser : UserService.updateUser;
    save(user)
      .then(response => response.json())
      .then(data => {
        this.updateUserState(data);
      })
      .then(() => {
        const user = this.packageUser();
        UserStorage.saveAppUser(user)
          .then(() => UserStorage.getAppUser())
          .then(user => console.log(user));
      })
      .catch(error => {
        const msg = `Error saving user: ${error}`;
        console.log(msg, this.state);
        this.setState({
          message: msg
        });
      });
  }

  packageUser() {
    return {
      id: this.state.id,
      userName: this.state.userName,
      fullName: this.state.fullName
    };
  }

  updateUserState(user) {
    this.setState({
      id: user.id,
      userName: user.userName,
      fullName: user.fullName
    }, () => {
      const msg = `User ${this.state.id} saved successfully!`;
      console.log(msg, this.state);
      this.setState({ message: msg });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FormLabel>User Name</FormLabel>
        <FormInput
          placeholder="Enter a user name"
          onChangeText={this.onUserNameChanged}
        />
        <FormLabel>Full Name</FormLabel>
        <FormInput
          placeholder="Enter first and last name (optional)"
          onChangeText={this.onFullNameChanged}
        />
        <Button
          title="Save"
          onPress={this.onSavePressed}
        />
        <FormValidationMessage>
          {this.state.message}
        </FormValidationMessage>
      </View>
    );
  }
}
