module.exports = {
  env: {
    browser: true,
    meteor: true,
    node: true
  },

  rules: {
    /**
     * Meteor Specific
     */
    // babel inserts "use strict"; for us
    // http://eslint.org/docs/rules/strict
    strict: [2, "never"],

    // allows certain non-constructor functions to start with a capital letter
    "new-cap": [2, {                // http://eslint.org/docs/rules/new-cap
      capIsNewExceptions: [
        "Match", "Any", "Object", "ObjectIncluding", "OneOf", "Optional", "Where"
      ]
    }]
  }
};
