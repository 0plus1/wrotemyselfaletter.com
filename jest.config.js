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
    "**/screens/*.{js,jsx,ts,tsx}",
    "**/modules/*.{js,jsx,ts,tsx}",
    "**/components/*.{js,jsx,ts,tsx}",
  ]
};
