import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User'
  };

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      userName: '',
      fullName: ''
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
    console.log('Save pressed!');
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
        </FormValidationMessage>
      </View>
    );
  }
}
