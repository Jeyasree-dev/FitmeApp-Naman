import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./Screens/loginScreen";
import LoadingScreen from "./Screens/loadingScreen";
import DashboardScreen from "./Screens/dashboardScreen";

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
 // LoadingScreen: LoadingScreen,
 // LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component{
  render(){
    return(
      <AppNavigator />
    )
  }
}