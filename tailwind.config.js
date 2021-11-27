module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#EF4444",
        dark: "#1E293B",
        mid: "#CBD5E1",
        light: "#F5F5F5"
      },    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
