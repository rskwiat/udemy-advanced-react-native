import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpFrom extends Component {

  render() {
    return (
      <View>
        <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput />
        </View>


        <Button title="Submit" />


      </View>
    )
  }

}

export default SignUpFrom;
