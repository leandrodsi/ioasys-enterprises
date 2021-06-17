import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import SearchItem from '../screens/SearchItem';

const Stack = createStackNavigator();

const AuthenticatedRoutes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Search" component={SearchItem} />
  </Stack.Navigator>
);

export default AuthenticatedRoutes;
