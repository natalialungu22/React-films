module.exports = {
    // Other ESLint configurations
    rules: {
        'no-unused-vars': process.env.CI ? 'off' : 'error',
    },
};