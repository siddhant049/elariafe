/** @type {import('tailwindcss').Config} */
export default {
 content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   extend: {
     colors: {
       primary: {
         50: '#fdfcfb',
         100: '#faf7f2',
         200: '#f5efe4',
         300: '#ede2c9',
         400: '#e2cfa7',
         500: '#d4b885',
         600: '#c5a16b',
         700: '#a88656',
         800: '#8c7149',
         900: '#745f3f',
         950: '#3e3120',
       },
       secondary: {
         50: '#f8fafc',
         100: '#f1f5f9',
         200: '#e2e8f0',
         300: '#cbd5e1',
         400: '#94a3b8',
         500: '#64748b',
         600: '#475569',
         700: '#334155',
         800: '#1e293b',
         900: '#0f172a',
         950: '#020617',
       },
       accent: {
         gold: '#d4af37',
         'gold-dark': '#b8860b',
         'gold-light': '#f4e87c',
       }
     },
     fontFamily: {
       'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
       'serif': ['Playfair Display', 'Georgia', 'serif'],
       'mono': ['JetBrains Mono', 'monospace'],
     },
     fontSize: {
       'xs': ['0.75rem', { lineHeight: '1rem' }],
       'sm': ['0.875rem', { lineHeight: '1.25rem' }],
       'base': ['1rem', { lineHeight: '1.5rem' }],
       'lg': ['1.125rem', { lineHeight: '1.75rem' }],
       'xl': ['1.25rem', { lineHeight: '1.75rem' }],
       '2xl': ['1.5rem', { lineHeight: '2rem' }],
       '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
       '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
       '5xl': ['3rem', { lineHeight: '1' }],
       '6xl': ['3.75rem', { lineHeight: '1' }],
       '7xl': ['4.5rem', { lineHeight: '1' }],
       '8xl': ['6rem', { lineHeight: '1' }],
       '9xl': ['8rem', { lineHeight: '1' }],
     },
     spacing: {
       '18': '4.5rem',
       '88': '22rem',
       '112': '28rem',
       '128': '32rem',
     },
     animation: {
       'fade-in': 'fadeIn 0.5s ease-in-out',
       'slide-up': 'slideUp 0.6s ease-out',
       'slide-down': 'slideDown 0.6s ease-out',
       'scale-in': 'scaleIn 0.3s ease-out',
     },
     keyframes: {
       fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' },
       },
       slideUp: {
         '0%': { transform: 'translateY(20px)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' },
       },
       slideDown: {
         '0%': { transform: 'translateY(-20px)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' },
       },
       scaleIn: {
         '0%': { transform: 'scale(0.95)', opacity: '0' },
         '100%': { transform: 'scale(1)', opacity: '1' },
       },
     },
   },
 },
 plugins: [],
}

