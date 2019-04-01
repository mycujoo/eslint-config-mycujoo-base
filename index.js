module.exports = {
  extends: ['airbnb-base'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'space-before-function-paren': ['error', 'always'],
    'function-paren-newline': ['error', 'multiline'],
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
}
