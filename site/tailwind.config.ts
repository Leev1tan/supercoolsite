// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}', // if you have a top-level /components dir
    ],
    theme: {
        extend: {
            colors: {
                primary: '#08f7fe',
                accent: '#ff00e1',
                midnight: '#0A0A0A',
                neonPink: '#ff00e1',
                neonCyan: '#08f7fe',

                // If you want to use CSS variables:
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            boxShadow: {
                neon: '0 0 10px #08f7fe, 0 0 20px #08f7fe',
            },
        },
    },
    plugins: [],
};

export default config;
