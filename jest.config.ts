/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'json'
  ],

  // A list of paths to components that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [
  //   './src/config/jest.setup.ts'
  // ],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/src/@core/**/application/useCases/**/*.test.ts'
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
};
