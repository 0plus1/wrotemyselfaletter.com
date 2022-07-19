import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import dayjs from 'dayjs';

const FormFooter = ({ date, navigation }: { date: Date }) => {
  return (
    <Text category='c1' style={{ textAlign: 'center' }}>
      After confirming your email address, you  will receive a letter on the {dayjs(date).format('DD MMMM YYYY')}.
      By sending your letter, you agree to the
      {' '}
      <Text onPress={() => navigation.navigate('Terms')} category='c1' style={styles.textLink}>
        terms of service
      </Text>
      {' '}
      and
      {' '}
      <Text onPress={() => navigation.navigate('Privacy')} category='c1' style={styles.textLink}>
        privacy policy
      </Text>
      .
    </Text>
  );
};

const styles = StyleSheet.create({
  textLink: {
    textDecorationLine: 'underline',
  }
});

export default FormFooter;
