import { View, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const APIError = ({ route, navigation }) => {
  const defaultError = 'Something went wrong. Please try again later.';
  // get error from route params if it exists
  const error = route?.params?.error || defaultError;

  return (
    <Layout style={styles.container}>
      <View style={{ width: 420, marginHorizontal: 'auto' }}>
        <Text category='h2' style={styles.error}>{error ?? defaultError}</Text>
      </View>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
});

export default APIError;
