import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenRoutes} from '../consts/ScreenRoutes';
import {PlayersListScreen} from '../screens/PlayersListScreen';
import {ShowRoleScreen} from '../screens/ShowRoleScreen';
import {GameBoardScreen} from '../screens/GameBoardScreen';

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
        <Stack.Screen
          name={ScreenRoutes.GAME_BOARD_SCREEN}
          component={GameBoardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
