module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: '*.test.js',
      options: {
        semi: true,
      },
    },
    {
      files: ['*.html'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
