import { View, StyleSheet } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';

const SubmissionResult = ({ result, onSendAnother } : { result: string, onSendAnother: Function }) => {
  let message = null;
  switch (result) {
    // This is the case where the email was never verified
    case 'UNVERIFIED':
      message = `Welcome, you will receive an email to verify your address. ${'\n'} Once verified,${'\n'} you will receive your letter on the selected day. 💌`;
      break;
    // This is the case where the email was verified
    // This means that a user previously verified their email with us
    case 'VERIFIED':
      message = `Your email address is already verified. ${'\n'} You will receive a letter on the day you selected.${'\n'} Thanks for coming back. 🙌`;
      break;
    default: 
      message = 'An error occurred. Please try again later.';
      break;
  }

  return (
    <View style={styles.container}>
      <Text category="label" style={styles.message}>{message}</Text>
      <Text category="h6" style={styles.more} onPress={onSendAnother}>
        Send another?
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
  },
  more: {
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  }
});

export default SubmissionResult;
