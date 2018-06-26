module.exports = {
    preset: 'jest-puppeteer',
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/server/','<rootDir>/next-redux-wrapper/']
};
