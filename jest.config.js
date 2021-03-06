module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testTimeout: 450000,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testPathIgnorePatterns: [".d.ts", ".js"],
    reporters: [
        "default",
        "jest-html-reporters"
    ],
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
