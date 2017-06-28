import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import SignUpForm from './components/signUpForm';
import SignInForm from './components/signInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAsaMZbU6OzmWHJnbHF-iSrPld1GyTMcEk",
      authDomain: "one-time-pw-1f65c.firebaseapp.com",
      databaseURL: "https://one-time-pw-1f65c.firebaseio.com",
      projectId: "one-time-pw-1f65c",
      storageBucket: "one-time-pw-1f65c.appspot.com",
      messagingSenderId: "305065821244"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#ecf0f1'
          centerComponent={{
            text: 'One Time PW',
            style: { color: '#222', fontSize: 18 }
          }}
        />
        <SignUpForm />
        <SignInForm />
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
  },
});
