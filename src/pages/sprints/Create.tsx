import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function SprintsCreate() {


  return (
    <View>
      <Text>Create Sprint</Text>
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