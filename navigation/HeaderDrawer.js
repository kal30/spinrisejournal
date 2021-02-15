import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

export default function HeaderInNavigation(props) {
  function openMenu() {
    props.navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <Icon name="menu" size={28} style={styles.icon} onPress={openMenu} />
      <View>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
});
