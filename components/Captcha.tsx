import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Captcha = ({ onVerify, hCaptchaEnabled, hCaptchaSiteKey}) => {
  if (!hCaptchaEnabled) {
    return null;
  }
  return (
    <View style={styles.container}>
      <HCaptcha
        sitekey={hCaptchaSiteKey}
        theme="dark"
        onVerify={(token,ekey) => onVerify(token, ekey)}
      />
    </View>
  )
};

Captcha.defaultProps = {
  hCaptchaEnabled: (process.env.HCAPTCHA_ENABLED === 'true'),
  hCaptchaSiteKey: process.env.HCAPTCHA_SITE_KEY,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Captcha;
