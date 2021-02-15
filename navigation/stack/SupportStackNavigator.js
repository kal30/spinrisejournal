import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SupportScreen from '../../screens/SupportScreen';
import HeaderInNavigation from '../HeaderDrawer';

const SupportStack = createStackNavigator();

export default function SupportStackNavigator(props, {navigation}) {
  return (
    <SupportStack.Navigator>
      <SupportStack.Screen
        name="Support"
        component={SupportScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderInNavigation navigation={navigation} title="Support" />
            ),
          };
        }}
      />
    </SupportStack.Navigator>
  );
}
