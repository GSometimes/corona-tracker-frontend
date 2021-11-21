module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          light: "#F5F5F5",
        },
        yellow: {
          light: "#FDE68A",
        },
        blue: {
          dark: "#334155",
        },
        gray: {
          light: "#94A3B9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
