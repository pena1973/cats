import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Cats from './src/screens/cats';
import Profile from './src/screens/profile';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Cats" screenOptions= {{headerShown: false}}>
      <Stack.Screen name="Cats" component={Cats} />
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (    
     <NavigationContainer>
       <MyStack />
     </NavigationContainer>   
  );
}

