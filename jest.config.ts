import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  passWithNoTests: true,
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  transform: { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" },
  reporters: ["default", "jest-junit"],
};

export default createJestConfig(config);
