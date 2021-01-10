module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testTimeout: 450000,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
}