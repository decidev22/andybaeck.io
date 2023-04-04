

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        electronicviolet: "#8C04DB",
        neonviolet: "#A80FFA"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // animation: {
      //   fade: 'faceOut 5s ease-in-and-out'
      // },
      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': {backgroundColor: theme('colors.red.300')},
      //     '100%':{backgroundColor: theme('colors.transparent')},
      //   },
      // })
    },
    screens: {
      xs: "390px",
      ss: "640px",
      sm: "1024px",
      md: "1440px",
      lg: "1920px",
      xl: "2560px",
      xxl: "3840px",
    },
  },
  plugins: [],
};

