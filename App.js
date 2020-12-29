import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import AllCardsScreen from './screens/AllCardsScreen'
import CardScreen from './screens/CardScreen'

const fetchFonts = () => {
  return Font.loadAsync({
      'OstrichSans': require('./assets/fonts/OstrichSans-Heavy.otf')
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
      return (
          <AppLoading
              startAsync={fetchFonts}
              onFinish={() => setDataLoaded(true)}
              onError={() => console.log('error')}
          />
      );
  };

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='About' component={AboutScreen} options={{headerShown: false}} />
        <Stack.Screen name='AllCards' component={AllCardsScreen} options={{headerShown: false}} />
        <Stack.Screen name='CardScreen' component={CardScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};