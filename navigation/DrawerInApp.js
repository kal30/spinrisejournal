import * as React from 'react';
//import {View, Text, Button} from 'react-native';
import {DrawerContent} from './DrawerContentNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import MainStackNavigator from './stack/MainStackNavigator';
import SupportStackNavigator from './stack/SupportStackNavigator';
import SettingsStackNavigator from './stack/SettingsStackNavigator';
import ProfileStackNavigator from './stack/ProfileStackNavigator';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {/* <Drawer.Screen
        name="ChildSelectionScreen"
        component={MainStackNavigator}
      /> */}
      <Drawer.Screen name="ProfileScreen" component={ProfileStackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsStackNavigator} />
      <Drawer.Screen name="SupportScreen" component={SupportStackNavigator} />
    </Drawer.Navigator>
  );
}
