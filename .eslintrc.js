// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'func-names': 0,
    'object-shorthand': 0,
    'no-unused-vars': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'new-cap': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'no-shadow': 0,
    'prefer-arrow-callback': 0,
    'no-else-return': 0,
    'consistent-return': 0,
    'wrap-iife': 0,
    'array-callback-return': 0,
    'no-useless-escape': 0
  }
};
