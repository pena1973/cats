import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Cats from './src/screens/cats';
import Profile from './src/screens/profile';
import Favorites from './src/screens/favorites';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Cats" screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Cats" component={Cats} />
      <Tab.Screen name="Profile" component={Profile} options = {{disableIconTint:false}}/> 
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
};

export default function App() {
  return (

    <NavigationContainer>     
      <MyTabs/>
    </NavigationContainer>

  );
}