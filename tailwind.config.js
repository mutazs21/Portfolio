/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        b: '#2563eb',
        dark: '#0f172a',
        html: '#E34F26',
        css: '#1572B6',
        js: '#F7DF1E',
        node: '#5FA04E',
        git: '#F05032',
        ps: '#31A8FF',
        ai: '#FF9A00',
        react:'#61DAFB',
        tailwindcolor: '#06B6D4',
      },
      screens: {
        '2xl': '1320px',
      },
      height: {
        '128': '34rem',
        '120': '500px',
      },
      width: {
        '85': '350px',
        '18': '72px',
        '17': '70px',
      }
    },
  },
  plugins: [],
}

