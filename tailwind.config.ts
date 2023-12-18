
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {



      colors: {
   
        primary: "#111827",
        primary_heading_color:''
      },
      backgroundImage: {
      
      
        blob: "url('../../src/assets/images/blob.svg')",
        range: "url('/public/images/range.webp')",
        
      




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
    // "#ef4444",
    require('tailwind-scrollbar')({ nocompatible: true }),
    
],
variants: {
  scrollbar: ['rounded']
}
}