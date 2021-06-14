import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AuthenticatedRoutes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AuthenticatedRoutes;
