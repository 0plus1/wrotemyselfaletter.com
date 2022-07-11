import { StyleSheet } from 'react-native';
import { Layout, Input, Text } from '@ui-kitten/components';

const Home = () => (
  <Layout style={styles.container}>
    <Text>culone</Text>
    <Input
      style={styles.input}
      size='small'
      placeholder='Small'
    />

    <Input
      style={styles.input}
      size='medium'
      placeholder='Medium'
    />

    <Input
      style={styles.input}
      size='large'
      placeholder='Large'
    />

    <Input
      multiline={true}
      textStyle={{ minHeight: 64 }}
      placeholder='Multiline'
    />
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginVertical: 2,
  },
});

export default Home;
