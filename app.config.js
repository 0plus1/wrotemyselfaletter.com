import 'dotenv/config';

export default ({ config }) => {
  // Merges original config from app.json with the rest
  return {
    ...config,
  };
};
