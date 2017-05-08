import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dotenv from 'dotenv';
dotenv.config();
import { loginWithFacebook } from './lib/auth'

class App extends React.Component {
  componentDidMount() {
    loginWithFacebook();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
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
