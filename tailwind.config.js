/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#44bba4",
        secondary: "#d3d0cb",
        sweetblack: "#393e41",
        sweetwhite: "#e7e5df",
        accent: "#e7bb41",
      },
    },
  },
  plugins: [],
};
