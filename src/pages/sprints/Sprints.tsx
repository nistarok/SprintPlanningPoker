import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from "../../contexts/auth";
import firestore from '@react-native-firebase/firestore';



interface UserData {
  name: string;
  email: string;
}

export default function Sprints() {
  const {user} = useAuth();

  async function getFireStore() {
    firestore()
    .collection("Users")
    .doc(user.uid)
    .get()
    .then((res)=> {
      const { email, name } = res.data() as UserData
      console.log(email, name)
    })
  }
  async function createFirestore() {
    firestore()
    .collection("Users")
    .doc(user.uid)
    .set({
      name: user ? user.displayName : "",
      email: user ? user.email : "",
    }).then((res) =>{
      console.log(res)
    })
  }

  // createFirestore()
  getFireStore()

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sprints </Text>
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