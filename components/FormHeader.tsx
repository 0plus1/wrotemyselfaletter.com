import { View, StyleSheet, Image } from 'react-native';

const FormHeader = () => {
  return (
    <View style={styles.titleContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 100,
  }
});

export default FormHeader;
