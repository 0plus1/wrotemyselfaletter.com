import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './screens/Home';
import { default as theme } from './theme.json';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  GochiHand_400Regular 
} from '@expo-google-fonts/gochi-hand';

export default () => {
  let [fontsLoaded] = useFonts({
    GochiHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <HomeScreen />
        <StatusBar style="auto" />
      </ApplicationProvider>
    );
  }
}
