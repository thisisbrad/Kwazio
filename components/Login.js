import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  render() {
    return (
      <View>
        <Text>Login Form</Text>
        <MKTextField
          text={this.state.email}
          placeholder="Enter Email..."
          onTextChange={email => this.setState({ email })}
          tintColor={MKColor.Teal}
        />
        <MKTextField
          text={this.state.password}
          placeholder="Enter Password..."
          onTextChange={password => this.setState({ password })}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text> {this.state.error} </Text>
      </View>
    );
  }
}

export default Login;
