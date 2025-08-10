/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    // tailwind.config.js
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
       extend: {
      backgroundImage: {
        'purple-dark-gradient':
          'linear-gradient(90deg, rgba(43, 11, 87, 1) 5%, rgba(67, 7, 83, 1) 20%, rgba(37, 0, 74, 1) 50%, rgba(64, 3, 37, 1) 70%, rgba(79, 6, 42, 1) 72%, rgba(2, 0, 74, 1) 100%)',
      },
    },
      },
      plugins: [],
    };