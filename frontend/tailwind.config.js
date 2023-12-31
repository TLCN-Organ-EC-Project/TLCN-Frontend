/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        main:'100%',
      },
      backgroundColor:{
        header:'#515151;',
        overplay:'rgba(0,0,0,0.7);',
        navbar:'linear-gradient(to top right, rgba(210, 221, 243, 0.8) 20%, rgba(252, 206, 200, 0.5) 120%);',
        footer:'#b7b7b7',
        order:'#f2f5fa',
      },
    },
  },
  important: true, 
  plugins: [],
}

