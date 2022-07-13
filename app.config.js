import 'dotenv/config';

export default ({ config }) => {
  // Merges original config from app.json with the rest
  return {
    ...config,
    extra: {
      hCaptchaEnabled: process.env.HCAPTCHA_ENABLED === 'true',
      hCaptchaSiteKey: process.env.HCAPTCHA_SITE_KEY,
    },
  };
};
