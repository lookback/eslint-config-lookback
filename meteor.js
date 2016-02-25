module.exports = {
  extends: [
    'eslint-config-lookback/rules/base',
    'eslint-config-lookback/rules/meteor'
  ].map(require.resolve),
  rules: {}
};
