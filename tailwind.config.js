module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '__Inter_0ec1f4',
        '__Inter_Fallback_0ec1f4',
        'Arial',
        'Helvetica',
        'sans-serif',
      ],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: '#131417',
        secondary: '#1E1F26',
        primaryText: '#868CA0',
        text555: '#555',
        white: '#fbfaf2',
        dark: '#292830',
        light: '#4A5568',
        accent: ' #ff585a',
        accentHover: '#e05216',
        grey: '#F5F5F5',
        blue: '#6610f2',
        purple: '#16213e',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/bg.jpg')",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
