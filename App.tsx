import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppNavigation} from './src/navigation/AppNavigation';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <AppNavigation />
        <StatusBar
          animated={true}
          backgroundColor={Colors.red}
          barStyle="default"
          showHideTransition="fade"
          hidden={true}
        />
      </SafeAreaProvider>
    </>
  );
}
