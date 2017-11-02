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
    // console.log('UserScreen props', props);
    this.state = {
      id: ''
    };

    this.onUserNameChanged = this.onUserNameChanged.bind(this);
    this.onFullNameChanged = this.onFullNameChanged.bind(this);
    this.onSavePressed = this.onSavePressed.bind(this);
  }

  onUserNameChanged(value) {
    const screenProps = this.props.screenProps;
    const onAppUserChanged = screenProps.appUserChanged;

    // Use spread operator to clone appUser and update userName property value.
    const appUser = { ...screenProps.appUser, userName: value };
    onAppUserChanged(appUser);
  }

  onFullNameChanged(value) {
    const screenProps = this.props.screenProps;
    const onAppUserChanged = screenProps.appUserChanged;

    // Use spread operator to clone appUser and update userName property value.
    const appUser = { ...screenProps.appUser, fullName: value };
    onAppUserChanged(appUser);
  }

  onSavePressed() {
    const screenProps = this.props.screenProps;
    const user = screenProps.appUser;
    const onAppUserChanged = screenProps.appUserChanged;

    const save = !user.id ? UserService.createUser : UserService.updateUser;
    save(user)
      .then(response => response.json())
      .then(data => {
        onAppUserChanged(data);
      })
      .then(() => {
        const msg = 'User saved';
        console.log(msg);
        this.setState({
          message: msg
        });
      })
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => {
        const msg = `Error saving user: ${error}`;
        console.log(msg);
        this.setState({
          message: msg
        });
      });
  }

  render() {
    const appUser = this.props.screenProps.appUser;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FormLabel>User Name</FormLabel>
        <FormInput
          placeholder="Enter a user name"
          onChangeText={this.onUserNameChanged}
          value={appUser.userName}
        />
        <FormLabel>Full Name</FormLabel>
        <FormInput
          placeholder="Enter first and last name (optional)"
          onChangeText={this.onFullNameChanged}
          value={appUser.fullName}
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
