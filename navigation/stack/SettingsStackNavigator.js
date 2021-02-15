import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../../screens/SettingsScreen';
import HeaderInNavigation from '../HeaderDrawer';

const SettingStack = createStackNavigator();

export default function SettingStackNavigator({navigation}) {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderInNavigation navigation={navigation} title="Settings" />
            ),
          };
        }}
      />
    </SettingStack.Navigator>
  );
}
