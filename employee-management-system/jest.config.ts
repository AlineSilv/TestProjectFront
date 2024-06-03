import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],


  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
    "**/__tests__/**/*.test.js?(x)",
  ],

  
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
