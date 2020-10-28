import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'

import { GoogleSignin } from '@react-native-community/google-signin';

import {AuthProvider} from './src/contexts/auth';
import Config from "react-native-config";


GoogleSignin.configure({
  webClientId: Config.GOOGLE_CLIENT_ID,
  offlineAccess: true
});

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};


export default App;
