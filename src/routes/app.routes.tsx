import React from 'react'
// import { createStackNavigator }from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator }from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'
import DrawerContent from '../pages/DrawerContent'
import SprintsCreate from '../pages/sprints/Create';
import SprintsRoutes from './sprints.routes';

const {Navigator, Screen} = createDrawerNavigator();

class Hidden extends React.Component {
  render() {
    return null;
  }
}

export default function AppRoutes() {
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />} drawerStyle={{width: 240}}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Sprints" component={SprintsRoutes} />
      <Screen name="SprintsCreate" component={SprintsCreate} options={() => ({
        drawerLabel: () => null,
        title: undefined,
        drawerIcon: () => null,
      })} />
    </Navigator>


  )

}

