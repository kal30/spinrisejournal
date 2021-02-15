import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
}
