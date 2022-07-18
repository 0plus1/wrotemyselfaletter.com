import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopNavigation from './components/TopNavigation';
import { default as theme } from './theme.json';
import HomeScreen from './screens/Home';
import TermsScreen from './screens/Terms';
import PrivacyScreen from './screens/Privacy';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: '',
    Terms: 'terms',
    Privacy: 'privacy',
  },
};

const linking = {
  prefixes: [],
  config,
};

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}/>
            <Stack.Screen name="Terms" component={TermsScreen} options={{ header: TopNavigation }}/>
            <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ header: TopNavigation }}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </>
  );
}
