import 'dotenv/config';

export default ({ config }) => {
  // Merges original config from app.json with the rest
  return {
    ...config,
    extra: {
      siteUrl: process.env.SITE_URL,
      githubUrl: process.env.GITHUB_URL,
      supportEmail: process.env.SUPPORT_EMAIL,
      hCaptchaEnabled: process.env.HCAPTCHA_ENABLED === 'true',
      hCaptchaSiteKey: process.env.HCAPTCHA_SITE_KEY,
    },
  };
};
