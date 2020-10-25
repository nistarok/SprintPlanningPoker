import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

// import auth from '@react-native-firebase/auth';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'

import { GoogleSignin } from '@react-native-community/google-signin';

import {AuthProvider} from './src/contexts/auth';
import Config from "react-native-config";

// import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';

console.log(Config.GOOGLE_CLIENT_ID)
GoogleSignin.configure({
  webClientId: Config.GOOGLE_CLIENT_ID,
  offlineAccess: true
});

declare const global: {HermesInternal: null | {}};

function App() {
  // GoogleSignin.configure({
  //   webClientId: '874790256394-kk69thkbj3c9a36fj3s2ea6hcdkfmg4h.apps.googleusercontent.com',
  //   offlineAccess: true

  // });


  // function GoogleSignIn() {
  //   return (
  //     <Button
  //       title="Google Sign-In"
  //       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
  //     />
  //   );
  // }

  // async function onGoogleButtonPress() {

  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential).then(cred => {
  //     console.log("CAIU NO THEN THEN THEN");
  //     console.log(cred.user);

  //   });
  // }


  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();


  // if (user) {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // }

  // Handle user state changes
  // function onAuthStateChanged(user: any) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <GoogleSignIn></GoogleSignIn>
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
