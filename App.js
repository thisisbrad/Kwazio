import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA7Xrew8kpScS6uxNUcQAivrPDnoXc8Ajk',
      authDomain: 'harambe-3266e.firebaseapp.com',
      databaseURL: 'https://harambe-3266e.firebaseio.com',
      projectId: 'harambe-3266e',
      storageBucket: 'harambe-3266e.appspot.com',
      messagingSenderId: '775519206694'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcom to my CRM!</Text>
        <Login />
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
