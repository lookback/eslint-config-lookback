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
    "node":    true,
    "es6":     true
  },
  "parserOptions": {
    "ecmaVersion":  8,
    "sourceType":   "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {

    "strict":                "off",
    "no-unused-expressions": ["error", {"allowShortCircuit": true, "allowTernary": true}],
    "new-cap":               "off",

    /**
     * ES6 Specific
     */
    "arrow-parens":           "off",               // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing":          "error",              // http://eslint.org/docs/rules/arrow-spacing
    "constructor-super":      "error",          // http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": "error",     // http://eslint.org/docs/rules/generator-star-spacing
    "no-class-assign":        "error",            // http://eslint.org/docs/rules/no-class-assign
    "no-const-assign":        "error",            // http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members":  "error",      // http://eslint.org/docs/rules/no-dupe-class-members
    "no-this-before-super":   "error",       // http://eslint.org/docs/rules/no-this-before-super
    "no-var":                 "error",                     // http://eslint.org/docs/rules/no-var
    "object-shorthand":       ["error", "methods"],           // http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback":  "warn",      // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const":           "error",               // http://eslint.org/docs/rules/prefer-const
    "prefer-spread":          "error",              // http://eslint.org/docs/rules/prefer-spread
    "prefer-template":        "error",            // http://eslint.org/docs/rules/prefer-template
    "require-yield":          "error",              // http://eslint.org/docs/rules/require-yield

    /**
     * Variables
     */
    "no-shadow":                  "error",                  // http://eslint.org/docs/rules/no-shadow
    "no-shadow-restricted-names": "error", // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-unused-vars":             ["warn", {          // http://eslint.org/docs/rules/no-unused-vars
      "vars": "local",
      "args": "none"
    }],
    "no-use-before-define": ["error", "nofunc"],    // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Possible errors
     */
    "block-scoped-var":        "off",           // http://eslint.org/docs/rules/block-scoped-var
    "no-alert":                "warn",                   // http://eslint.org/docs/rules/no-alert
    "no-cond-assign":          [1, "always"], // http://eslint.org/docs/rules/no-cond-assign
    "no-console":              "off",                 // http://eslint.org/docs/rules/no-console
    "no-constant-condition":   "warn",      // http://eslint.org/docs/rules/no-constant-condition
    "no-debugger":             "warn",                // http://eslint.org/docs/rules/no-debugger
    "no-dupe-keys":            "error",               // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case":       "error",          // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty":                "error",                   // http://eslint.org/docs/rules/no-empty
    "no-labels":               "error",                  // http://eslint.org/docs/rules/no-labels
    "no-ex-assign":            "error",               // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast":   "off",      // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-semi":           "error",              // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign":          "error",             // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations":   "error",      // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp":       "error",          // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": "error",    // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-obj-calls":            "error",               // http://eslint.org/docs/rules/no-obj-calls
    "no-sparse-arrays":        "error",           // http://eslint.org/docs/rules/no-sparse-arrays
    "no-undef":                "error",                   // http://eslint.org/docs/rules/no-undef
    "no-unreachable":          "error",             // http://eslint.org/docs/rules/no-unreachable
    "quote-props":             ["warn", "as-needed"], // http://eslint.org/docs/rules/quote-props
    "use-isnan":               "error",                  // http://eslint.org/docs/rules/use-isnan

    /**
     * Best practices
     */
    "consistent-return": "error",                      // http://eslint.org/docs/rules/consistent-return
    "curly":             ["error", "multi-line"],      // http://eslint.org/docs/rules/curly
    "default-case":      [                       // http://eslint.org/docs/rules/default-case
      "error",
      {
        "commentPattern": "^skip\\sdefault"
      }
    ],
    "dot-notation": ["error", {            // http://eslint.org/docs/rules/dot-notation
      "allowKeywords": true
    }],
    "eqeqeq":       "error",                     // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": "error",               // http://eslint.org/docs/rules/guard-for-in
    "max-len":      ["warn", 100, 2, {         // http://eslint.org/docs/rules/max-len
      "ignoreUrls":    true, "ignorePattern": "['\"]"
    }],
    "no-caller":           "error",                  // http://eslint.org/docs/rules/no-caller
    "no-else-return":      "error",             // http://eslint.org/docs/rules/no-else-return
    "no-eq-null":          "error",                 // http://eslint.org/docs/rules/no-eq-null
    "no-eval":             "error",                    // http://eslint.org/docs/rules/no-eval
    "no-extend-native":    "error",           // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind":       "error",              // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough":      "error",     // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": "error",        // http://eslint.org/docs/rules/no-floating-decimal
    "no-implied-eval":     "error",            // http://eslint.org/docs/rules/no-implied-eval
    "no-iterator":         "error",                // http://eslint.org/docs/rules/no-iterator
    "no-label-var":        "error",               // http://eslint.org/docs/rules/no-label-var
    "no-lone-blocks":      "error",             // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func":        "error",               // http://eslint.org/docs/rules/no-loop-func
    "no-multi-spaces":     ["error",
      {
        "ignoreEOLComments": true,
        "exceptions":        {
          "ImportDeclaration":  true,
          "Property":           true,
          "VariableDeclarator": true
        }
      }
    ],            // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str":       "error",               // http://eslint.org/docs/rules/no-multi-str
    "no-native-reassign": "error",         // http://eslint.org/docs/rules/no-native-reassign
    "no-new":             "error",                     // http://eslint.org/docs/rules/no-new
    "no-new-func":        "error",                // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers":    "error",            // http://eslint.org/docs/rules/no-new-wrappers
    "no-octal":           "error",                   // http://eslint.org/docs/rules/no-octal
    "no-octal-escape":    "error",            // http://eslint.org/docs/rules/no-octal-escape
    "no-param-reassign":  "off",          // http://eslint.org/docs/rules/no-param-reassign
    "no-process-exit":    "error",            // http://eslint.org/docs/rules/no-process-exit
    "no-proto":           "error",                   // http://eslint.org/docs/rules/no-proto
    "no-redeclare":       "error",               // http://eslint.org/docs/rules/no-redeclare
    "no-return-assign":   "error",           // http://eslint.org/docs/rules/no-return-assign
    "no-script-url":      "error",              // http://eslint.org/docs/rules/no-script-url
    "no-self-compare":    "error",            // http://eslint.org/docs/rules/no-self-compare
    "no-sequences":       "error",               // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal":   "error",           // http://eslint.org/docs/rules/no-throw-literal
    "no-with":            "error",                    // http://eslint.org/docs/rules/no-with
    "radix":              "error",                      // http://eslint.org/docs/rules/radix
    "vars-on-top":        "off",                // http://eslint.org/docs/rules/vars-on-top
    "wrap-iife":          ["error", "any"],         // http://eslint.org/docs/rules/wrap-iife
    "yoda":               "error",                       // http://eslint.org/docs/rules/yoda

    /**
     * Style
     */
    "indent":      ["error", 2, {"SwitchCase": 1} ], // http://eslint.org/docs/rules/indent
    "brace-style": ["warn",               // http://eslint.org/docs/rules/brace-style
      "1tbs", {
        "allowSingleLine": true
      }
    ],
    "quotes": [
      1, "single", "avoid-escape"    // http://eslint.org/docs/rules/quotes
    ],
    "camelcase": ["error", {               // http://eslint.org/docs/rules/camelcase
      "properties": "never"
    }],
    "comma-spacing": ["error", {           // http://eslint.org/docs/rules/comma-spacing
      "before": false,
      "after":  true
    }],
    "comma-style": ["error", "last"],      // http://eslint.org/docs/rules/comma-style
    "eol-last":    "error",                   // http://eslint.org/docs/rules/eol-last
    "func-names":  "off",                 // http://eslint.org/docs/rules/func-names
    "func-style":  "off",                 // http://eslint.org/docs/rules/func-style
    "key-spacing": ["error", {       // http://eslint.org/docs/rules/key-spacing
      "beforeColon": false,
      "afterColon":  true,
      "align":       "value"
    }],
    "new-parens":              "warn",                 // http://eslint.org/docs/rules/new-parens
    "no-multiple-empty-lines": ["error", { // http://eslint.org/docs/rules/no-multiple-empty-lines
      "max": 2
    }],
    "no-nested-ternary":    "off",          // http://eslint.org/docs/rules/no-nested-ternary
    "no-new-object":        "error",              // http://eslint.org/docs/rules/no-new-object
    "no-array-constructor": "error",       // http://eslint.org/docs/rules/no-array-constructor
    "no-spaced-func":       "error",             // http://eslint.org/docs/rules/no-spaced-func
    "no-trailing-spaces":   "error",         // http://eslint.org/docs/rules/no-trailing-spaces
    "no-extra-parens":      [            // http://eslint.org/docs/rules/no-extra-parens
      "error",
      "all",
      {
        "nestedBinaryExpressions": false
      }
    ],
    "no-underscore-dangle": "off",       // http://eslint.org/docs/rules/no-underscore-dangle
    "one-var":              "off",                    // http://eslint.org/docs/rules/one-var
    "padded-blocks":        "off",              // http://eslint.org/docs/rules/padded-blocks
    "semi":                 ["error", "always"],           // http://eslint.org/docs/rules/semi
    "semi-spacing":         ["error", {            // http://eslint.org/docs/rules/semi-spacing
      "before": false,
      "after":  true
    }],
    "keyword-spacing":             "error",           // http://eslint.org/docs/rules/keyword-spacing
    "space-before-blocks":         "error",        // http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": ["error", { // http://eslint.org/docs/rules/space-before-function-paren
      "anonymous":  "never",
      "named":      "never",
      "asyncArrow": "always"
    }],
    "space-infix-ops": "error",            // http://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops": "error",            // http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment":  "error",             // http://eslint.org/docs/rules/spaced-comment
  }
};
