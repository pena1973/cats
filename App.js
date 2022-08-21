import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Cats from './src/screens/cats';
import Profile from './src/screens/profile';
import Favorites from './src/screens/favorites';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="CatsN" component={Cats}/>
      <Stack.Screen name="Profile" component={Profile}/> 
     </Stack.Navigator >
  )
};
 const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator initialRouteName="Cats" 
    //screenOptions={{ headerShown: false }} 
    screenOptions={({ route }) => ({headerShown: false,
      tabBarIcon: ({ focused, color, size}) => {
        let iconName;
        if (route.name === 'Cats') {
          iconName = focused
            ? 'md-home'
            : 'md-home';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'md-heart' : 'md-heart';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}

     >
      <Tab.Screen name="Cats" component={MyStack}/>
      <Tab.Screen name="Favorites" component={Favorites} />
     </Tab.Navigator >
  )
};

export default function App() {
  return (

    <NavigationContainer>     
      <MyTabs/>
    </NavigationContainer>

  );
}