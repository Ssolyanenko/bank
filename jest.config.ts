import { defaults } from 'jest-config';

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'jsx', 'js'],
  transformIgnorePatterns: ['/node_modules/(?!(i18n-js)/)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': ['<rootDir>/__mocks__/fileMock.js', 'identity-obj-proxy'],
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.test.(tsx|ts)'],
  collectCoverageFrom: [
    '<rootDir>/**/*.{tsx,ts}',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/jest.config.ts',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/reportWebVitals.ts',
    '!<rootDir>/src/react-app-env.d.ts',
  ],
  coveragePathIgnorePatterns: ['/.storybook/', '/interfaces/', '/constants/', '/assets/'],
};
