import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const FormHeader = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title} category='h1'>
        Write yourself a letter
      </Text>
      <Text style={styles.subTitle} category='h6'>
        Something to say to your future self
      </Text>
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
  title: {
    fontFamily: 'GochiHand_400Regular', 
    fontSize: 30,
  },
  subTitle: {
    fontSize: 10,
  }
});

export default FormHeader;
