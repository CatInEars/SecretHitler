import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ScreenRoutes} from '../consts/ScreenRoutes';
import {PlayersListScreen} from '../screens/PlayersListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShowRoleScreen} from '../screens/ShowRoleScreen';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ScreenRoutes.PLAYERS_LIST_SCREEN}
          component={PlayersListScreen}
        />
        <Stack.Screen
          name={ScreenRoutes.SHOW_ROLE_SCREEN}
          component={ShowRoleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
