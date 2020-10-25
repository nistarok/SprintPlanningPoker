import React from 'react'
import { createStackNavigator }from '@react-navigation/stack'


import Dashboard from '../pages/Dashboard'

const {Navigator, Screen} = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false,
      cardStyle: {backgroundColor:"#f2f3f5"}
    }}>
      <Screen name="Dashboard" component={Dashboard} />

    </Navigator>
  )
}