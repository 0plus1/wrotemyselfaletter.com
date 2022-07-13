import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import TermsScreen from './screens/Terms';
import { default as theme } from './theme.json';

const Stack = createNativeStackNavigator();

import {
  useFonts,
  GochiHand_400Regular 
} from '@expo-google-fonts/gochi-hand';

const config = {
  screens: {
    Home: '',
    Terms: 'terms',
  },
};

const linking = {
  prefixes: [],
  config,
};

export default () => {
  let [fontsLoaded] = useFonts({
    GochiHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}/>
            <Stack.Screen name="Terms" component={TermsScreen} options={{ headerShown: false, }}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ApplicationProvider>
    );
  }
}
