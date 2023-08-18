/* eslint-disable sort-keys */
module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
