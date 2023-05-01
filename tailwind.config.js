/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: "#1e1814",
        light: "#f5f5f5",
        darkSecondary: "#274357", // 39,67,87
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        reactBlue: "#61dafb", // 97,218,251
        nodeGreen: "#3c873a", // 60,135,58
        t1: "#9EC5AB" , // 158,197,171
        t2: "#5A2328" , // 90,35,40
    }, 
    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
    },
    animation: { 
      'spin-slow': 'spin 6s linear infinite',
      'translate-x': 'translateX 1s ease-in-out infinite alternate',
      'ping-slow': 'ping 3s  infinite',
      'waving-hand': 'wave 2s linear infinite',
    }, 
    backgroundImage: { 
      circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
    },

   
  },
  screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "414px" },
    // => @media (max-width: 414px) { ... }
},
  },
 
  plugins: [],
}
