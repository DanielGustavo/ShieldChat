import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../screens/Chat';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#24292E',
      },
    }}
    initialRouteName="Chat"
  >
    <Stack.Screen component={Chat} name="Chat" />
  </Stack.Navigator>
);

export default Routes;
