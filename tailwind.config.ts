import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        servix: {
          dark: '#0B1C33', // اللون الكحلي من الشعار
          primary: '#4BA6F5', // اللون السماوي من حرف I
          light: '#F3F6F8', // خلفية رمادية فاتحة جداً للوحات التحكم
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to right bottom, #0B1C33, #152C4A)",
      },
    },
  },
  plugins: [],
};
export default config;