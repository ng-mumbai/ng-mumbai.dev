// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Specify the files Tailwind should scan for classes to generate CSS.
  // This includes all HTML, TypeScript, and JavaScript files in your src directory.
  content: [
    './src/**/*.{html,ts,js}',
    './src/**/*.component.{html,ts}',
    './projects/**/*.{html,ts,js}', // For Angular workspaces with multiple projects
  ],
  theme: {
    // Extend Tailwind's default theme with custom configurations.
    extend: {
      // Note: In Tailwind v4, custom fonts are defined in CSS using @theme
      // instead of in this config file
    },
  },
  plugins: [],
};

export default config;
