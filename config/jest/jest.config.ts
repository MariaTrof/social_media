import path from 'path';
import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jest-environment-jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: ['node_modules'],
    modulePaths: [
        '<rootDir>src',
    ],
    rootDir: '../../',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    roots: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>config/jest/JestSetUp.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};
export default config;
