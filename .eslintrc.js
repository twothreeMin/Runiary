module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'arrow-body-style': ['error', 'always'],
    'react/jsx-filename-extension':
      ['error',
        { extensions: ['.js', '.jsx'] },
      ],
    'react/jsx-one-expression-per-line':
      [1,
        { allow: 'literal' },
      ],
    'react/function-component-definition':
      [1,
        { namedComponents: 'arrow-function' },
      ],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
  },
};
