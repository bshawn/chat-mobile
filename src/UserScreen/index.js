import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import FullPageSpinner from '../common/FullPageSpinner';
import UserService from './user-service';

const userId = '59f6b1ae4605bd002c597eff';

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
      isDirty: false,
      isLoading: true
    };

    this.userNameChanged = this.userNameChanged.bind(this);
    this.fullNameChanged = this.fullNameChanged.bind(this);
    this.okPressed = this.okPressed.bind(this);
  }

  componentDidMount() {
    // Load the user's data from storage.
    UserService.getUserById(userId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data.id,
          userName: data.userName,
          fullName: data.fullName,
          isLoading: false
        });
      })
      .catch(error => console.error(error));
  }

  userNameChanged(value) {
    this.setState({ userName: value });
    // console.log('New user name: ', value);
  }

  fullNameChanged(value) {
    this.setState({ fullName: value });
    // console.log('New name: ', value);
  }

  okPressed() {
    // See if the user exists

    // Update
    // Create
    // Update local storage
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
        <Button
          title="OK"
          onPress={this.okPressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});