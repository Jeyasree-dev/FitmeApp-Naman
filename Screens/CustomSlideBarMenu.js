import * as React from 'react';
import {Text,View, Image,StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
   
  render(){
    let props= this.props;
    return(
     <View style={{flex:1, backgroundColor: "white"}}>
     <Image source={require('../assets/logo.png')} style={styles.sideBarMenuProfile} />
     <DrawerContentScrollView {...props}>
     <DrawerItemList {...props}/>
     </DrawerContentScrollView>
    </View>
    )
  }
}
const styles=StyleSheet.create({
  sideBarMenuProfile:{
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
    alignSelf:'center',
    marginTop: RFValue(60),
    resizeMode:'contain'
  }
})