import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Separator } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';


export default function SprintsCreate() {
  // Referencia do model
  const sprintRef = firestore().collection('Sprints')

  // UseNaviagation
  const navigation = useNavigation();

  // Auth
  const {user} = useAuth();


  const [startDate, setStartDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('');

  function onChangeStartDate(event: any, selectedDate?: Date) {
    const currentDate = selectedDate || startDate;
    if (currentDate)
      setShow(false)
      setStartDate(currentDate)
  }

  function showDatePicker() {
    setShow(true)
  }

  async function handleCreateSprint() {
    await sprintRef.add({
      title: title,
      startDate: startDate,
      userId: user.uid
    }).then(res => {
      navigation.navigate('Sprints')

    }

    )

  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Nova Sprint</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={[styles.input]} value={title} onChangeText={setTitle}/>

      <Text style={styles.label}>Data Inicial</Text>
      {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
      { show ?
          (
            <DateTimePicker mode={"date"} value={startDate} onChange={onChangeStartDate}/>
          )
        :
          (
            <Button onPress={showDatePicker} title={startDate.toString()} />
          )
      }
      <Separator />
      <Button onPress={handleCreateSprint} title="Criar" />



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5"
  },
  title: {
    fontFamily: "WorkSans-Black",
    fontSize: 24,
    color: '#2F1E21',
    textAlign: "center",
    paddingBottom: 24
  },
  label: {
    color: '#2F1E21',
    fontFamily: "WorkSans-Medium",
    marginBottom:8,

  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: '#1877F2',
    fontFamily: "WorkSans-Medium",
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',

  },
})