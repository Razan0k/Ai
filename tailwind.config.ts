import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'IBM Plex Sans Arabic',
          'Tajawal',
          'Segoe UI',
          'Tahoma',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          950: '#040711',
          900: '#07101f',
          850: '#0a1428',
          800: '#0d1d35',
        },
        electric: {
          400: '#38d8ff',
          500: '#16bfff',
          600: '#087dff',
        },
        mint: {
          400: '#2df5d6',
          500: '#12cdb7',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(22, 191, 255, 0.22)',
        'glow-soft': '0 0 80px rgba(45, 245, 214, 0.12)',
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(56, 216, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 216, 255, 0.08) 1px, transparent 1px)',
        'radial-scan':
          'radial-gradient(circle at 20% 15%, rgba(45,245,214,0.20), transparent 26%), radial-gradient(circle at 78% 8%, rgba(78,107,255,0.18), transparent 32%), radial-gradient(circle at 54% 76%, rgba(119,72,255,0.14), transparent 28%)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-28%)' },
          '100%': { transform: 'translateY(128%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(-10px, 14px, 0)' },
        },
      },
      animation: {
        scan: 'scan 4.5s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
