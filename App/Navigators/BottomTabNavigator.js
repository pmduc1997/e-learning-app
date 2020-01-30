import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Image, View,Text } from "react-native";
import Logo from 'App/Assets/Images/logo.png'
import Icon from 'react-native-vector-icons/AntDesign';

import Courses from 'App/Containers/Courses/Index'
import Dashboard from 'App/Containers/Dashboard/Index'
import Search from 'App/Containers/Search/Index'
const TabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Search", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <View style={{alignItems:'center'}}>
            <Icon name='search1' size={27} color={tintColor} />
            <Text style={{color:tintColor}}>Search</Text>
          </View>
        )
      })
    },
    Courses: {
      screen: Courses,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Courses", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <View style={{alignItems:'center'}}>
            <Icon name='book' size={27} color={tintColor} />
            <Text style={{color:tintColor}}>My Courses</Text>
          </View>
        )
      })
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Dashboard", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <View style={{alignItems:'center'}}>
            <Icon name='user' size={27} color={tintColor} />
            <Text style={{color:tintColor}}>Account</Text>
          </View>
        )
      })
    },
  },
  {
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#08ADFA',
      inactiveTintColor: '#B9D0EC',
      style: {
        borderTopWidth: 1,
        borderTopColor: "#E1EDFC",
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);