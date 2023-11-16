
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {



      colors: {
   
        primary: "#ef4444",
        primary_heading_color:''
      },
      backgroundImage: {
      
      
        blob: "url('../../src/assets/images/blob.svg')",
        blob2: "url('/public/images/blob2.png')",
      




      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1280px',
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
    
],
variants: {
  scrollbar: ['rounded']
}
}