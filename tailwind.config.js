module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
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
