module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testURL: 'http://localhost',
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.{js,jsx}',
    '<rootDir>/components/**/*.{js,jsx}',
  ],
}
