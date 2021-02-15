import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import HeaderInNavigation from '../HeaderDrawer';

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigator({navigation}) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderInNavigation
                navigation={navigation}
                title="User Profile"
              />
            ),
          };
        }}
      />
    </ProfileStack.Navigator>
  );
}
