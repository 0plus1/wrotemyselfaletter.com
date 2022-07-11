import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './screens/Home';
import { default as theme } from './theme.json';

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <HomeScreen />
    <StatusBar style="auto" />
  </ApplicationProvider>
);
