import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './src/components/Navbar';
import Home from './src/screens/Home';
import Networking from './src/screens/Networking';
import Notification from './src/screens/Notification';
import Jobs from './src/screens/Jobs';

const Tab = createBottomTabNavigator();

function MainRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Tab.Screen name="My Network" component={Networking} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
      <Tab.Screen name="Jobs" component={Jobs} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

