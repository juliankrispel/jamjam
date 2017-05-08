import React from 'react';
import '../lib/firebase';
import Login from './Login';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import renderComponent from 'recompose/renderComponent';
import branch from 'recompose/branch';
import { TouchableHighlight, Button, StyleSheet, Text, View } from 'react-native';
mport identity from 'lodash/identity';
import SubmitLink from './SubmitLink';


const App = () => (
  <SubmitLink />
);

const rootHoc = compose(
  withState('isLoggedIn', 'setLoggedIn', false),
  withState('isLoading', 'setIsLoading', false),
  withState('location', 'setLocation', false),
  branch(
    ({isLoggedIn}) => isLoggedIn,
    identity,
    renderComponent(Login)
  )
)

export default rootHoc(App);
