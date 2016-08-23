/* Meteor's ES6 Javascript linting configuration
 *
 * From https://github.com/meteor/todos/blob/master/.eslintrc-meteor
 *
 * Documentation on rules can be found at:
 * http://eslint.org/docs/rules/ <- Optionally append the rulename
 *
*/
module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "jsx": true
  },
  "rules": {

    "strict": 0,
    "no-unused-expressions": 1,
    "new-cap": 0,

/**
 * ES6 Specific
 */
    "arrow-parens": 0,               // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": 2,              // http://eslint.org/docs/rules/arrow-spacing
    "constructor-super": 2,          // http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": 2,     // http://eslint.org/docs/rules/generator-star-spacing
    "no-class-assign": 2,            // http://eslint.org/docs/rules/no-class-assign
    "no-const-assign": 2,            // http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members": 2,      // http://eslint.org/docs/rules/no-dupe-class-members
    "no-this-before-super": 2,       // http://eslint.org/docs/rules/no-this-before-super
    "no-var": 2,                     // http://eslint.org/docs/rules/no-var
    "object-shorthand": 0,           // http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": 1,      // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": 2,               // http://eslint.org/docs/rules/prefer-const
    "prefer-spread": 2,              // http://eslint.org/docs/rules/prefer-spread
    "prefer-template": 2,            // http://eslint.org/docs/rules/prefer-template
    "require-yield": 2,              // http://eslint.org/docs/rules/require-yield

/**
 * Variables
 */
    "no-shadow": 2,                  // http://eslint.org/docs/rules/no-shadow
    "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-unused-vars": [1, {          // http://eslint.org/docs/rules/no-unused-vars
      "vars": "local",
      "args": "none"
    }],
    "no-use-before-define": [2, "nofunc"],    // http://eslint.org/docs/rules/no-use-before-define

/**
 * Possible errors
 */
    "block-scoped-var": 0,           // http://eslint.org/docs/rules/block-scoped-var
    "no-alert": 1,                   // http://eslint.org/docs/rules/no-alert
    "no-cond-assign": [1, "always"], // http://eslint.org/docs/rules/no-cond-assign
    "no-console": 0,                 // http://eslint.org/docs/rules/no-console
    "no-constant-condition": 1,      // http://eslint.org/docs/rules/no-constant-condition
    "no-debugger": 1,                // http://eslint.org/docs/rules/no-debugger
    "no-dupe-keys": 2,               // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": 2,          // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty": 2,                   // http://eslint.org/docs/rules/no-empty
    "no-labels": 2,                  // http://eslint.org/docs/rules/no-labels
    "no-ex-assign": 2,               // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast": 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-semi": 2,              // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": 2,             // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations": 2,      // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-obj-calls": 2,               // http://eslint.org/docs/rules/no-obj-calls
    "no-sparse-arrays": 2,           // http://eslint.org/docs/rules/no-sparse-arrays
    "no-undef": 2,                   // http://eslint.org/docs/rules/no-undef
    "no-unreachable": 2,             // http://eslint.org/docs/rules/no-unreachable
    "quote-props": [1, "as-needed"], // http://eslint.org/docs/rules/quote-props
    "use-isnan": 2,                  // http://eslint.org/docs/rules/use-isnan

/**
 * Best practices
 */
    "consistent-return": 2,          // http://eslint.org/docs/rules/consistent-return
    "curly": [2, "multi-line"],      // http://eslint.org/docs/rules/curly
    "default-case": 2,               // http://eslint.org/docs/rules/default-case
    "dot-notation": [2, {            // http://eslint.org/docs/rules/dot-notation
      "allowKeywords": true
    }],
    "eqeqeq": 2,                     // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": 2,               // http://eslint.org/docs/rules/guard-for-in
    "max-len": [1, 100, 2, {         // http://eslint.org/docs/rules/max-len
      "ignoreUrls": true, "ignorePattern": "['\"]"
    }],
    "no-caller": 2,                  // http://eslint.org/docs/rules/no-caller
    "no-else-return": 2,             // http://eslint.org/docs/rules/no-else-return
    "no-eq-null": 2,                 // http://eslint.org/docs/rules/no-eq-null
    "no-eval": 2,                    // http://eslint.org/docs/rules/no-eval
    "no-extend-native": 2,           // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": 2,              // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough": 2,             // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": 2,        // http://eslint.org/docs/rules/no-floating-decimal
    "no-implied-eval": 2,            // http://eslint.org/docs/rules/no-implied-eval
    "no-iterator": 2,                // http://eslint.org/docs/rules/no-iterator
    "no-label-var": 2,               // http://eslint.org/docs/rules/no-label-var
    "no-lone-blocks": 2,             // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": 2,               // http://eslint.org/docs/rules/no-loop-func
    "no-multi-spaces": 2,            // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str": 2,               // http://eslint.org/docs/rules/no-multi-str
    "no-native-reassign": 2,         // http://eslint.org/docs/rules/no-native-reassign
    "no-new": 2,                     // http://eslint.org/docs/rules/no-new
    "no-new-func": 2,                // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": 2,            // http://eslint.org/docs/rules/no-new-wrappers
    "no-octal": 2,                   // http://eslint.org/docs/rules/no-octal
    "no-octal-escape": 2,            // http://eslint.org/docs/rules/no-octal-escape
    "no-param-reassign": 0,          // http://eslint.org/docs/rules/no-param-reassign
    "no-process-exit": 2,            // http://eslint.org/docs/rules/no-process-exit
    "no-proto": 2,                   // http://eslint.org/docs/rules/no-proto
    "no-redeclare": 2,               // http://eslint.org/docs/rules/no-redeclare
    "no-return-assign": 2,           // http://eslint.org/docs/rules/no-return-assign
    "no-script-url": 2,              // http://eslint.org/docs/rules/no-script-url
    "no-self-compare": 2,            // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": 2,               // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": 2,           // http://eslint.org/docs/rules/no-throw-literal
    "no-with": 2,                    // http://eslint.org/docs/rules/no-with
    "radix": 2,                      // http://eslint.org/docs/rules/radix
    "vars-on-top": 0,                // http://eslint.org/docs/rules/vars-on-top
    "wrap-iife": [2, "any"],         // http://eslint.org/docs/rules/wrap-iife
    "yoda": 2,                       // http://eslint.org/docs/rules/yoda

/**
 * Style
 */
    "indent": [2, 2],                // http://eslint.org/docs/rules/indent
    "brace-style": [1,               // http://eslint.org/docs/rules/brace-style
      "1tbs", {
        "allowSingleLine": true
      }
    ],
    "quotes": [
      1, "single", "avoid-escape"    // http://eslint.org/docs/rules/quotes
    ],
    "camelcase": [2, {               // http://eslint.org/docs/rules/camelcase
      "properties": "never"
    }],
    "comma-spacing": [2, {           // http://eslint.org/docs/rules/comma-spacing
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],      // http://eslint.org/docs/rules/comma-style
    "eol-last": 2,                   // http://eslint.org/docs/rules/eol-last
    "func-names": 0,                 // http://eslint.org/docs/rules/func-names
    "func-style": 0,                 // http://eslint.org/docs/rules/func-style
    "key-spacing": [2, {             // http://eslint.org/docs/rules/key-spacing
      "beforeColon": false,
      "afterColon": true
    }],
    "new-parens": 1,                 // http://eslint.org/docs/rules/new-parens
    "no-multiple-empty-lines": [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      "max": 2
    }],
    "no-nested-ternary": 2,          // http://eslint.org/docs/rules/no-nested-ternary
    "no-new-object": 2,              // http://eslint.org/docs/rules/no-new-object
    "no-array-constructor": 2,       // http://eslint.org/docs/rules/no-array-constructor
    "no-spaced-func": 2,             // http://eslint.org/docs/rules/no-spaced-func
    "no-trailing-spaces": 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    "no-extra-parens": 2,            // http://eslint.org/docs/rules/no-extra-parens
    "no-underscore-dangle": 0,       // http://eslint.org/docs/rules/no-underscore-dangle
    "one-var": 0,                    // http://eslint.org/docs/rules/one-var
    "padded-blocks": 0,              // http://eslint.org/docs/rules/padded-blocks
    "semi": [2, "always"],           // http://eslint.org/docs/rules/semi
    "semi-spacing": [2, {            // http://eslint.org/docs/rules/semi-spacing
      "before": false,
      "after": true
    }],
    "keyword-spacing": 2,           // http://eslint.org/docs/rules/keyword-spacing
    "space-before-blocks": 2,        // http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": [ // http://eslint.org/docs/rules/space-before-function-paren
      2, "never"
    ],
    "space-infix-ops": 2,            // http://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops": 2,            // http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment": 2,             // http://eslint.org/docs/rules/spaced-comment
  }
};
