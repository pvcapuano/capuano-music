/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://stuff.fendergarage.com/images/g/6/2/Web_Squier_0425_23_NPI_Squier_Sonic_Series_Launch_HPS_DESKTOP.jpg')",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
