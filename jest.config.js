module.exports = {
  bail: true,
  verbose: true,
  testURL: 'http://127.0.0.1',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  resolver: 'jest-pnp-resolver',
  setupFiles: [
    // 'react-app-polyfill/jsdom',
    '<rootDir>/test/jest.js'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setupEnzyme.js',
    '<rootDir>/test/setupTests.js'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.(spec|test).{js,jsx,ts,tsx}',
    '!<rootDir>/src/tools/scripts/test.js'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/test/helpers/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/test/helpers/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/helpers/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/helpers/styleMock.js',

    '^src(.*)$': '<rootDir>/src$1',
    '^modules(.*)$': '<rootDir>/src/modules$1',
    '^client(.*)$': '<rootDir>/src/client$1'
  },
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'html', 'text-summary'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{jsx,ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/.vscode/**',
    '!<rootDir>/**/*.json',
    '!<rootDir>/**/*.stories.jsx'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/package.json'
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
}
