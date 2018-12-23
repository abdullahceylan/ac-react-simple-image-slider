module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  }
};
