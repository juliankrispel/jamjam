import React from 'react';
import '../lib/firebase';
import Login from './Login';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import renderComponent from 'recompose/renderComponent';
import branch from 'recompose/branch';
import { TouchableHighlight, Button, StyleSheet, Text, View } from 'react-native';
import identity from 'lodash/identity';


const App = () => (
  <View>
    <Text>The Main View</Text>
  </View>
);

const rootHoc = compose(
  withState('isLoggedIn', 'setLoggedIn', false),
  withState('location', 'setLocation', false),
  branch(
    ({isLoggedIn}) => {
      console.log('yoyoyo');
      console.log('is logged in', isLoggedIn);
      return isLoggedIn;
    },
    identity,
    renderComponent(Login)
  )
)

export default rootHoc(App);
