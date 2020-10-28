import React, { createContext, useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';



interface UserData {
  displayName?: string;
  email: string;
  uid: string;
}

interface AuthContextData {
  signed: boolean;
  user: {
    displayName?: string;
    email?: string;
    uid: string;
  };
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as  AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  // function googleConfigure() {
  //   GoogleSignin.configure({
  //     webClientId: '874790256394-kk69thkbj3c9a36fj3s2ea6hcdkfmg4h.apps.googleusercontent.com',
  //     offlineAccess: true
  //   });
  // }


  const [loading, setLoading] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user as UserData);
    if (loading) setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  const [user, setUser] = useState<UserData>()

  async function signIn() {
    console.log("SignIn")
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential).then(cred => {
      const user = cred.user as UserData
      setUser( user )
    });
  }

  async function signOut() {
    auth().signOut().then(() => console.log('User signed out!'));
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context;
}


export {AuthProvider, useAuth}