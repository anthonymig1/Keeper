import React, { Component } from 'react';
import { 
  View,
  Text,
  SafeAreaView
} from 'react-native';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
const Home = ()=>(
  <View>
    <Text>Home</Text>
  </View>
);

const Settings = ()=>(
  <View>
    <Text>Settings</Text>
  </View>
)
export default class DashBoard extends Component{
  render(){
    return(
      <SafeAreaView style = {{flex: 1, backgroundColor: '#f2f2f2'}}>
        <BottomTabNavigator/>
      </SafeAreaView>
    );
  }
}


const BottomTabNavigator = createMaterialTopTabNavigator({
  Home: { 
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="ios-home" size={24} color='white'/>
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions:{
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="ios-settings" size={24} color='white'/>
      )
    }
  }
},{
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions:{
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor:'#f2f2f2'
    },
    showIcon: true
  }
});