module.exports = {
    testEnvironment: "jest-environment-node",
    setupFilesAfterEnv: ["<src>/jest.setup.js"],
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
};
