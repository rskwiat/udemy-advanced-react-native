import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT = 'https://us-central1-one-time-pw-1f65c.cloudfunctions.net';

//Update to show errors
class SignUpForm extends Component {
  state = {
    phone: '',
    error: ''
  }

  handleSubmit = async (e) => {
    try {
      await axios.post(`${ROOT}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT}/requestOneTimePassword`, { phone: this.state.phone });
    } catch(err) {
      this.setState({ error: err });
    }
  }

  renderError() {
    if (this.state.error) {
      return (
        <View>
          <Text>{this.state.error}</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.formArea}>
        <View style={styles.form}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          {this.renderError()}
        </View>
        <Button
          onPress={this.handleSubmit}
          buttonStyle={styles.button}
          icon={{name: 'cached'}}
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

export default SignUpForm;
