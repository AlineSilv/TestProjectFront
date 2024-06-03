import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src", "<rootDir>/"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.tsx"
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
