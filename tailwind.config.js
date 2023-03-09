module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "0.625rem",
        center: true,
        screens: { sm: "576px", md: "768px", lg: "1024px", xl: "1320px" },
      },
    },
  },
  plugins: [],
};
