import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
