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
import APIError from './screens/APIError';
import VerifyEmailSuccess from './screens/VerifyEmailSuccess';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: '',
    Terms: 'terms',
    Privacy: 'privacy',
    APIError: 'error',
    VerifyEmailSuccess: 'verify-email-success',
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
        <NavigationContainer linking={linking} documentTitle={{
            formatter: (options, route) => 
              `Wrote myself a letter - ${options?.title ?? route?.name}`,
          }}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: 'Send a letter to yourself'}}/>
            <Stack.Screen name="Terms" component={TermsScreen} options={{ header: TopNavigation }}/>
            <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ header: TopNavigation }}/>
            <Stack.Screen name="APIError" component={APIError} options={{ header: TopNavigation }}/>
            <Stack.Screen name="VerifyEmailSuccess" component={VerifyEmailSuccess} options={{ header: TopNavigation }}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </>
  );
}
