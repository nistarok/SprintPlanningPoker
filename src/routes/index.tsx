import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from "../contexts/auth";

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { ActivityIndicator, View } from 'react-native';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}