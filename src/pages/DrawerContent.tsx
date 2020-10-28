import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../contexts/auth';
import Icon from 'react-native-vector-icons/AntDesign'

Icon.loadFont()

export default function DrawerContent(props: DrawerContentComponentProps) {
  const { signOut, user } = useAuth();
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem label={() =><Text>Logout</Text>}
          style={styles.bottom}
          onPress={signOut}
          icon={({ focused }) => <Icon color={'black'} size={20} name='logout' />}
        />
    </View>
  );
}



const styles = StyleSheet.create({
  bottom: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },

})