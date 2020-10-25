import React, { useContext, useState } from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native'


export default function BacklogList() {

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>asdasd</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    position: "absolute",
    right: 4,
    top: 14,

    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 56,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  }
});
