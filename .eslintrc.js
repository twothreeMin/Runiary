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
    'object-curly-newline': ['error', { multiline: true }],
    'react/jsx-filename-extension':
      ['error',
        { extensions: ['.js', '.jsx'] },
      ],
    'react/jsx-one-expression-per-line':
      [0,
        { allow: 'none' },
      ],
    'react/function-component-definition':
      ['warn',
        { namedComponents: 'arrow-function' },
      ],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions':
      ['warn',
        { handlers: ['onClick', 'onKeyUp'] },
      ],
    'no-console': 'off',
  },
};
