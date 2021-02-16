import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ToolBarButton,
  ToolBarButtonText,
} from '../components/narrative/Toolbar';

export default function ChildSelectionScreen({navigation}) {
  function renderItem() {
    return (
      <View>
        <View style={styles.containerInRow}>
          {/* <Text style={styles.childNameText}>
            {item.firstName} {item.lastName}
          </Text> */}
        </View>
        <View style={styles.toolBar}>

          <ToolBarButtonText
            name="Track"
            title='chat-outline'
            onPress={() => navigation.navigate('Track')}
          />

          <ToolBarButtonText
            name="Timeline"
            title='calendar'
            onPress={() => navigation.navigate('Timeline')}
          />
          <ToolBarButtonText
            name="Charts"
            title='chart-line'
            onPress={() => navigation.navigate('Chart')}
          />
          <ToolBarButtonText
            name="Reminders"
            title='bell-outline'
            onPress={() => navigation.navigate('Reminders')}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>{renderItem()}</View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flexDirection: 'column',
    flex: 1,
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  containerInRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    flex: 1,
    paddingBottom: 5,
  },

  childNameText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
    color: 'grey',
  },
  toolBar: {
    justifyContent: 'space-between',
    borderColor: 'gray',
    flexDirection: 'row',
    // flex: 4,
  },
});
