import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View style={styles.vieStyle}>
        <Text>Add Button to relaunch login :)</Text>

      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}

const styles = {
  vieStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default connect(mapStateToProps, actions)(AuthScreen);
