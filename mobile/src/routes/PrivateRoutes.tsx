import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Chat from '../screens/Chat';
import Sidebar from '../screens/Sidebar';

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
    <Stack.Screen
      component={Sidebar}
      name="Sidebar"
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);

export default Routes;
