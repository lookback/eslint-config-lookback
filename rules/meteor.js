module.exports = {
  env: {
    browser: true,
    meteor: true,
    node: true,
    es6: true
  },

  rules: {
    /**
     * Meteor Specific
     */
    // babel inserts "use strict"; for us
    // http://eslint.org/docs/rules/strict
    strict: [2, "never"]
  },

  globals: {
    moment: false
  }
};
