import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import {useAuth} from '../../contexts/auth'
export default function SignIn() {
  const {signIn} = useAuth()
  function handleSignIn(){
    signIn()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sign In </Text>
      <Button title="SignIn" onPress={handleSignIn}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2D9D0"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
})