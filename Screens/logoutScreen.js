import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import firebase from 'firebase'

export default class LogoutScreen extends React.Component{
  componentDidMount(){
    firebase.auth().signOut()
  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoutText}>Logout</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  logoutText:{
    fontSize:20
  }
})