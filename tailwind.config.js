/** @type {import('tailwindcss').Config} */
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope: ["Noto Sans", 'sans-serif'],
        heading: ["SUSE", 'sans-serif'],
      },
      backgroundImage:{
        'banner': "url('/banner.jpg')",
        'emptyCart': "url('/EmptyCart.png')",


      },colors:{
        backgroundColor:"#002e4e",
        text:"#00406c",
        heading:"#f0f7ff",
        primary:"#050721",
        secondary:"#09122C",
        gold:"#ffd700",
        purple:"#7d3c98",
        red:"#ff0000",
        footer: "#030518"
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
  
 
};



function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
