module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: [
      "@testing-library/jest-native/extend-expect"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/common/",
  ],
  transformIgnorePatterns: ["node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"],
  collectCoverage: true,
  coverageReporters: ["json"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ]
};
