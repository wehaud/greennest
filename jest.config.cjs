module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    setupFilesAfter: ['./setupTests.js'],
};