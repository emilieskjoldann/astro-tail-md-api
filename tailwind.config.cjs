/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            colors: {
                'persianmosaic': {
                    100: '#7aa1a9',
                    200: '#64929b',
                    300: '#4e838e',
                    400: '#367480',
                    500: '#196673',
                    600: '#145863',
                    700: '#104a54',
                    800: '#0b3c45',
                    900: '#072f36',
                  },
            }
        }
    },
  };