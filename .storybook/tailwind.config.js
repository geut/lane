module.exports = {
    // mode: 'jit',
    purge:  [
      './src/**/*.{js,ts,jsx,tsx}',
      './stories/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
      },
    },
    variants: {
      extend: {},
    },
    plugins: []
  }