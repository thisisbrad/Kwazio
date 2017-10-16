import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  onButtonPress = () => {
    console.log('###Clicked button!!! #### ');
  };
  render() {
    return (
      <View>
        <Text>Login Form</Text>

        <Text> {this.state.error} </Text>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
