import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': '#ffffff',
        'neutral-50': '#f3f3f3',
        'neutral-100': '#c9c9c9',
        'neutral-200': '#939393',
        'neutral-400': '#a5a4a4',
        'neutral-700': '#5c5c5c',
        'neutral-800': '#2e2e2e',
        'blue-950': '#03234d',
        'orange-600': '#fe5c4c',
        'red-100': '#feded8',
        'red-200': '#fddde3',
        'red-700': '#b60554',
        'red-800': '#ba0517',
        'red-950': '#4a0c04',
      },
      borderColor: {
        'neutral-0': '#ffffff',
        'neutral-50': '#f3f3f3',
        'neutral-100': '#c9c9c9',
        'neutral-200': '#939393',
        'neutral-400': '#a5a4a4',
        'neutral-700': '#5c5c5c',
        'neutral-800': '#2e2e2e',
        'blue-950': '#03234d',
        'orange-600': '#fe5c4c',
        'red-100': '#feded8',
        'red-200': '#fddde3',
        'red-700': '#b60554',
        'red-800': '#ba0517',
        'red-950': '#4a0c04',
      },
      backgroundColor: {
        'neutral-0': '#ffffff',
        'neutral-50': '#f3f3f3',
        'neutral-100': '#c9c9c9',
        'neutral-200': '#939393',
        'neutral-400': '#a5a4a4',
        'neutral-700': '#5c5c5c',
        'neutral-800': '#2e2e2e',
        'blue-950': '#03234d',
        'orange-600': '#fe5c4c',
        'red-100': '#feded8',
        'red-200': '#fddde3',
        'red-700': '#b60554',
        'red-800': '#ba0517',
        'red-950': '#4a0c04',
      },
    },
  },
  plugins: [animatePlugin],
};
export default config;
