/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        main:'1400px',
      },
      backgroundColor:{
        header:'#515151;',
        overplay:'rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
}

