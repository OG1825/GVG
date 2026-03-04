/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#3B82F6',
        'accent-dark': '#1E40AF',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      spacing: {
        '18': '4.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            a: {
              color: '#3B82F6',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
