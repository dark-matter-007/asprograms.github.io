/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*"],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(45) forwards',
        caret: 'typewriter 2s steps(22) forwards, blink 1s steps(45) infinite',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

