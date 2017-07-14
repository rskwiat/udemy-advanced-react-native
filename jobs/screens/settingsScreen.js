import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
  }

  render() {
    return (
      <View>
        <Card>
          <Button
            title="Reset"
            large
            icon={{ name: 'delete-forever' }}
            backgroundColor="#F44336"
            onPress={this.props.clearLikedJobs}
          />
        </Card>
      </View>
    );
  }

}

export default connect(null, actions)(SettingsScreen);
