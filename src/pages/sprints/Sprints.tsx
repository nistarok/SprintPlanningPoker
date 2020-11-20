import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from "../../contexts/auth";
import firestore from '@react-native-firebase/firestore';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

Icon.loadFont()


interface SprintData {
  title: string;
  startDate: string;
  userId: string;
}

export default function Sprints() {
  const {user} = useAuth();
  const [spints, setSprints] = useState<SprintData[]>([])

  const navigation = useNavigation();

  async function getFireStore() {
    firestore()
    .collection("Sprints")
    .get()
    .then((res)=> {
      console.log(res.docs)
      // setSprints
    })
  }

  // async function createFirestore() {
  //   firestore()
  //   .collection("Users")
  //   .doc(user.uid)
  //   .set({
  //     name: user ? user.displayName : "",
  //     email: user ? user.email : "",
  //   }).then((res) =>{
  //     console.log(res)
  //   })
  // }

  // // createFirestore()
  useFocusEffect(() => {
    getFireStore()
  })


  function handleNewSprint() {
    navigation.navigate('SprintsCreate')

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sprints </Text>
      <RectButton style={styles.createSprintButton} onPress={handleNewSprint}>
        <Icon color={"#fff"} size={20} name='plus' />
      </RectButton>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: '#2F1E21'
  },
  createSprintButton: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    width: 56,
    height: 56,
    backgroundColor: "#1877F2",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})