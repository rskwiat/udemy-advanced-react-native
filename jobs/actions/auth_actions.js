import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

// Returns Promises...
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

const ID = '149947595575946';

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');

  if (token) {
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    });
  } else {
    //start up fb login
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(ID, {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({
      type: FACEBOOK_LOGIN_FAIL
    });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: token
  });
};
