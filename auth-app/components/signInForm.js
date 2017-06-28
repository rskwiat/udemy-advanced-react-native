import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT = 'https://us-central1-one-time-pw-1f65c.cloudfunctions.net';

//Update to show errors
class SignInForm extends Component {
  state = {
    phone: '',
    code: ''
  }

  handleSubmit = async (e) => {
    try {
      let { data } = await axios.post(`${ROOT}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.formArea}>
        <View>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <FormLabel>Enter Authorization Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button
          onPress={this.handleSubmit}
          buttonStyle={styles.button}
          icon={{name: 'fingerprint'}}
          title="Submit"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formArea: {
    backgroundColor: '#FFF',
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%'
  },
  form: {
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: '#3498db'
  }
});

export default SignInForm;
