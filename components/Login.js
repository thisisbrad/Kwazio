import React, { Component } from 'react';
import { Content, Button, Text, Form, Item, Input, Label } from 'native-base';

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
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button full primary onPress={() => this.onButtonPress()}>
            <Text>Click Me! </Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default Login;
