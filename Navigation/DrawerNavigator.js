import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigation";
import Profile from "../Screens/ProfileScreen";
import LogoutScereen from "../Screens/logoutScreen";
import firebase from 'firebase';
import CustomSideBarMenu from '../Screens/CustomSlideBarMenu';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
  
  render(){
   return (
    <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor:'#e91e63',
      inactiveTintColor: 'black',
      itemStyle:{marginVertical: 5}
    }}
    drawerContent={(props)=> <CustomSideBarMenu{...props}/>}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScereen}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
  }
}

