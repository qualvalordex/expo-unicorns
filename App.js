import React, { useState } from 'react';

/* Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './src/screens/Home';
import Cards from './src/screens/Cards';
import Translation from './src/screens/Translation';
import About from './src/screens/About';

/* Load fonts */
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
const fetchFonts = () => {
  return Font.loadAsync({
    'ostrich': require('./assets/fonts/OstrichSans-Heavy.otf'),
  });
};

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  if (!dataLoaded) {
    return(
      <AppLoading
        startAsync = { fetchFonts }
        onFinish = { () => setDataLoaded(true) }
        onError = { () => console.log(error) }
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Cards' component={Cards} options={{headerShown: false}} />
        <Stack.Screen name='Translation' component={Translation} options={{headerShown: false}} />
        <Stack.Screen name='About' component={About} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;