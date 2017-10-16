import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Button, Text, Form, Item, Input, Label } from 'native-base';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  onButtonPress = () => {
    console.log('###Clicked button!!! #### ', this.state);
  };

  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel last>
            <Label>Username</Label>
            <Input onChangeText={value => this.setState({ email: value })} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              secureTextEntry
              onChangeText={value => this.setState({ password: value })}
            />
          </Item>
          <Button
            full
            primary
            style={styles.submitButton}
            onPress={() => this.onButtonPress()}
          >
            <Text>Click Me! </Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 30
  }
});

export default Login;
