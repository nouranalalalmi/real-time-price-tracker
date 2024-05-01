import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  passWithNoTests: true,
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 78,
      functions: 74,
      lines: 88,
      statements: 88,
    },
  },
};

export default createJestConfig(config);
