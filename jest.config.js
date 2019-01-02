const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    },
  },
  setupFiles: [
    "./jest.setup.js"
  ],
  testMatch: ["<rootDir>/**/*.test.tsx"],
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/",
    "<rootDir>/build/"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!react-native)/"
  ],
  cacheDirectory: '.jest/cache',
};