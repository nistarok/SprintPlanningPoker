import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from "../contexts/auth";

export default function Dashboard() {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Dashboard Page </Text>
      <Text style={styles.title}> Welcome {user && user.displayName ? user.displayName: null} </Text>
      <Button title="SignOut" onPress={handleSignOut}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2980b9"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: '#FFF'
  },
})