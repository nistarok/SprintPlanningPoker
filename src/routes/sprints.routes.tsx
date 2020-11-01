import React from 'react';
import { createStackNavigator }from '@react-navigation/stack'

import Sprints from '../pages/sprints/Sprints';
import SprintsCreate from '../pages/sprints/Create';

const {Navigator, Screen} = createStackNavigator();


export default function SprintsRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false,
      cardStyle: {backgroundColor:"#f2f3f5"}
    }}>
      <Screen name="Sprints" component={Sprints} />
      <Screen name="SprintsCreate" component={SprintsCreate} />

    </Navigator>
  )
}