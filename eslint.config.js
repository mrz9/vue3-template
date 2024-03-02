import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [
      '**/cache',
      '**/dist',
      '**/.temp',
      '**/*.svg',
    ],
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'nonblock-statement-body-position': ['error', 'below'],
    },

  },
)
