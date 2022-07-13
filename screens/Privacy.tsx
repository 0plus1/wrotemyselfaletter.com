import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Text } from '@ui-kitten/components';

const Privacy = ({ SITE_URL, GITHUB_URL }) => {
  return (
    <Layout style={styles.container}>
      <Text category='h3' style={styles.title}>
        Privacy Policy
      </Text>
      <Text category="p1" style={styles.text}>
        {SITE_URL} runs on AWS instances following very strict security guidelines including but not limited to MFA, encryption at rest, rotating key-pairs. Every change in the infrastructure will be discosed in this policy as soon as possible.
        Every page is served through SSL.
      </Text>
      <Text category="s1" style={styles.text}>
        With the exception of Google Analytics, {SITE_URL} does not serve third-party content anywhere on the site.
      </Text>
      <Text category="p1" style={styles.text}>
        If there is a privacy or data breach it will be disclosed as soon as possible.
        If you spot a privacy or security issue, please report it on github ({GITHUB_URL}).
      </Text>
      <Text category="s1" style={styles.text}>
        Please do not store truly sensitive information on {SITE_URL}.
      </Text>
      <Text category="p1" style={styles.text}>
        Last updated 14 July 2022
      </Text>
    </Layout >
  )
};

Privacy.defaultProps = {
  SITE_URL: Constants.manifest.extra.siteUrl,
  GITHUB_URL: Constants.manifest.extra.githubUrl,
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

export default Privacy;
