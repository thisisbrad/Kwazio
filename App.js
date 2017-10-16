import React from 'react';
import Expo from 'expo';
import { Container, Header, Content, Button, Text } from 'native-base';
import firebase from 'firebase';
import Login from './components/Login';

export default class App extends React.Component {
  async componentDidMount() {
    const config = {
      apiKey: 'AIzaSyA7Xrew8kpScS6uxNUcQAivrPDnoXc8Ajk',
      authDomain: 'harambe-3266e.firebaseapp.com',
      databaseURL: 'https://harambe-3266e.firebaseio.com',
      projectId: 'harambe-3266e',
      storageBucket: 'harambe-3266e.appspot.com',
      messagingSenderId: '775519206694'
    };
    firebase.initializeApp(config);

    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Login />
        </Content>
      </Container>
    );
  }
}
