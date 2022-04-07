import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { Detail } from './screens/Detail';
import { Home } from './screens/Home';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (<>
    <StatusBar style="auto" />
    <Providers>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='detail' component={Detail} />
      </Stack.Navigator>
    </Providers>
  </>);
}
