import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Networking from '../screens/Networking';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();


function MainRoutes() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Network" component={Networking} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainRoutes