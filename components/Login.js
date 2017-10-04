import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
  .withText('LOGIN')
  .withRippleLocation('center')
  .build();

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  onButtonPress = () => {
    console.log(
      '################# Clicked button!!! ######################################################## '
    );
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
          textInputStyle={styles.fieldStyles}
          onTextChange={password => this.setState({ password })}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text> {this.state.error} </Text>
        <View>
          <LoginButton onPress={this.onButtonPress.bind(this)} />
        </View>
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
