import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  //sets property on class not on instance
  static navigationOptions = ({ navigation }) => ({
    title: 'Reviews Jobs',
    headerRight: (
      <Button
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    ),
    headerLeft: (
      <Button
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        title="Logout"
        onPress={() => navigation.navigate('welcome')}
      />
    )
  });

  render() {
    return (
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}


export default ReviewScreen;
