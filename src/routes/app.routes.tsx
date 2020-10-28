import React from 'react'
// import { createStackNavigator }from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard'
import Sprints from '../pages/sprints/Sprints'
import DrawerContent from '../pages/DrawerContent'

const {Navigator, Screen} = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />} drawerStyle={{width: 240}}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Sprints" component={Sprints} />
    </Navigator>
  )

}

