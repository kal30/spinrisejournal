import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SR_Messenger from '../../components/narrative/SR_Messenger';
import SR_Chart from '../../components/chart/SR_Chart';
import SR_Reminder from '../../components/reminder/SR_Reminder';
import SR_Timeline from '../../components/timeline/SR_Timeline';
import ChildSelectionScreen from '../../screens/ChildSelectionScreen';
import HeaderInNavigation from '../HeaderDrawer';

function ChatRoute(props) {
  return <SR_Messenger  />;
}
function TimelineRoute(props) {
  return <SR_Timeline />;
}
function ChartRoute(props) {
  return <SR_Chart  />;
}
function ReminderRoute(props) {
  return <SR_Reminder  />;
}

const Stack = createStackNavigator();

export default function MainStackNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ChildSelectionScreen}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderInNavigation
                navigation={navigation}
                title="Choose A Child"
              />
            ),
          };
        }}
      />
       <Stack.Screen
        name="Track"
        component={ChatRoute}
        // options={({route}) => ({
        //   title: route.params.firstName + ' ' + route.params.lastName,
        // })}
      />

      <Stack.Screen
        name="Timeline"
        component={TimelineRoute}
        // options={({route}) => ({
        //   title:
        //     'Timeline ' + route.params.firstName + ' ' + route.params.lastName,
        // })}
      />
      <Stack.Screen
        name="Chart"
        component={ChartRoute}
        // options={({route}) => ({
        //   title:
        //     'Analyze ' + route.params.firstName + ' ' + route.params.lastName,
        // })}
      />
      <Stack.Screen
        name="Reminders"
        component={ReminderRoute}
        // options={({route}) => ({
        //   title:
        //     'Reminder ' + route.params.firstName + ' ' + route.params.lastName,
        // })}
      /> 
    </Stack.Navigator>
  );
}