import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';

// Import Screens
import Home from './src/Home/Home';
import Search from './src/Search/Search';
import Favourite from './src/Favourite/Favourite';
import MovieScreen from './src/MovieScreen/MovieScreen';
import PersonScreen from './src/Person/PersonScreen';
import LoadingScreen from './src/LoadingScreen/LoadingScreen';

// Create Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#A27B5C',
        tabBarInactiveBackgroundColor: '#DCD7C9',
        tabBarStyle: {
          position: 'relative',
          elevation: 0,
          backgroundColor: 'white',
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="search1" size={25} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

// Main App Navigation
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          options={{
            headerShown: true,
            headerTitle: '', // Hide the title
            headerBackTitleVisible: false, // Hide the back button text
            headerTransparent: true, // Makes the header transparent
            headerTintColor: 'black', // Change back button color (optional)
          }}
        />
        <Stack.Screen
          name="PersonScreen"
          component={PersonScreen}
          options={{
            headerShown: true,
            headerTitle: '', // Hide the title
            headerBackTitleVisible: false, // Hide the back button text
            headerTransparent: true, // Makes the header transparent
            headerTintColor: 'black', // Change back button color (optional)
          }}
        />
  </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
