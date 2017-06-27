import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import SignUpFrom from './components/signUpForm';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#333'
          centerComponent={{
            text: 'OTP',
            style: { color: '#fff', fontSize: 18 }
          }}
        />
        <SignUpFrom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
