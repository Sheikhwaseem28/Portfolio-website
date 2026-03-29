/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bw: {
          bg:     '#0F0F0F',
          text:   '#F5F5F5',
          accent: '#A1A1AA',
          card:   '#1A1A1A',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans:   ['Inter', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
