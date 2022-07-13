import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const Terms = () => {
  return (
    <Layout style={styles.container}>
      <Text category='h3' style={styles.title}>
        Terms
      </Text>
      <Text category='c1' style={styles.title}>
        Terms
      </Text>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  }
});

export default Terms;
