import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Text } from '@ui-kitten/components';

const Terms = ({ SUPPORT_EMAIL }) => {
  return (
    <Layout style={styles.container}>
      <Text category='h3' style={styles.title}>
        Terms of Service
      </Text>
      <Text category="p1" style={styles.text}>
        You can choose to remain anonymous. The only requirements are a working email address for confirmation and letter delivery.
        You have the right to export your data from the site at any time by emailing {SUPPORT_EMAIL}.
        You can close your account at any time by emailing {SUPPORT_EMAIL}.
      </Text>
      <Text category="p1" style={styles.text}>
        Your data will be backed up regularly, and the backups tested. The best possible effort will be made to ensure that your data is safe.
        If there is a significant outage, you will receive a full explanation of the circumstances and what measures will be taken to prevent a recurrence.
        If the site ceases operation, you will receive an opportunity to download your stored data in JSON format.
      </Text>
      <Text category="s1" style={styles.text}>
        The best possible effort will be made to ensure that your email will be delivered in time. Aquí no hay garantía de nada.
      </Text>
      <Text category="p1" style={styles.text}>
        Any new features that affect privacy will be strictly opt-in.
        You will be treated with respect and discretio.
      </Text>
      <Text category="p1" style={styles.text}>
        Last updated 14 July 2022
      </Text>
    </Layout >
  )
};

Terms.defaultProps = {
  SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default Terms;
