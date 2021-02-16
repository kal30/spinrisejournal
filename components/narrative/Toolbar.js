import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  
  export function ToolBarButton(props) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.button}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
  
  export function ToolBarButtonText(props) {
    return (
      <View style={styles.boxAround}>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.titleText}>{props.name}</Text>
          <Text style={styles.imageIcon}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      top: -2,
      marginRight: 5,
      marginLeft: 10,
      fontSize: 20,
      color: 'blue',
    },
    boxAround: {
      // borderColor: "lightgrey",
      // borderWidth: 0.5,
      paddingRight: 20,
      justifyContent: 'flex-end',
      marginHorizontal: 5,
      marginVertical: 10,
      textAlignVertical: 'center',
    },
    titleText: {
      fontSize: 15,
      textAlign: 'center',
    },
    imageIcon: {
      textAlign: 'center',
      fontSize: 20,
    },
  });