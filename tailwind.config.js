/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Montserrat",
      },
      colors: {
        primaryColor: "#111111",
        //secondaryColor: "#9b59b6",
        secondaryColor: "#FBB040",
        //bgColor: "#34495e",
        bgColor: "#0A0360",
      },
      boxShadow: {
        btnShadow: "0px 0px 18px 3px rgba(52,73,94,1)",
      },
    },
  },
  plugins: [],
};
