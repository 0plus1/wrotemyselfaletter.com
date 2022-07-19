import { View, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const VerifyEmailSuccess = () => {
  return (
    <Layout style={styles.container}>
      <View style={{ width: 420, marginHorizontal: 'auto' }}>
        <Text category='h2' style={styles.success}>E-Mail verified, thanks!</Text>
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
  success: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
});

export default VerifyEmailSuccess;
