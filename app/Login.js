import { loginWithFacebook } from '../lib/auth'
import withHandlers from 'recompose/withHandlers';
import React from 'react';
import { TouchableHighlight, Button, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 20,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
});


const Login = ({ login, setLoggedIn }) => {
  console.log('set logged in', setLoggedIn);
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={login}>
        <View style={styles.button} >
          <Ionicons name="logo-facebook" size={18} color="white" />
          <Text style={styles.loginText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default withHandlers({
  login: ({ setLoggedIn }) => event => loginWithFacebook(setLoggedIn),
})(Login);
