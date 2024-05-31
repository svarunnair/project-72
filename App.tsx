import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './src/components/Navbar';
import Home from './src/screens/Home';
import Networking from './src/screens/Networking';
import Notification from './src/screens/Notification';
import Jobs from './src/screens/Jobs';
import AddPost from './src/screens/AddPost';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MainRoutes() {
  
  const screenHeight=Dimensions.get("window").height
  const screenWidth=Dimensions.get("window").width



  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: screenHeight*.07,
          padding:7
        },
        tabBarLabelStyle: {
          fontSize: 14, 
          color:"grey",
          marginBottom:5,

        },
        tabBarIconStyle: {

        },
      }}>
      <Tab.Screen name="Home" component={Home}  options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
           <MaterialIcon name="home" color={color} size={size} />
          ), }} />
      <Tab.Screen name="My Network" component={Networking} options={{ headerShown: false , tabBarIcon: ({ color, size, }) => (
            <MaterialIcon name="people" color={color} size={size} />
          ), }} />
      <Tab.Screen name="Post"  component={AddPost} options={{ headerShown: false , tabBarIcon: ({ color, size }) => (
              <MaterialIcon name="add-box" color={color} size={size} />
          ), }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false , tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="notifications" color={color} size={size} />
          ), }}/>
      <Tab.Screen name="Jobs" component={Jobs} options={{ headerShown: false , tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="work" color={color} size={size} />
          ), }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <View style={styles.container}>
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

