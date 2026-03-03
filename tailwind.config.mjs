/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: { 
        primary: "#137fec",
        "studio-gray": "#f4f7fa",
        "menu-gray": "#334155"
      },
      fontFamily: { 
        display: ["Space Grotesk", "sans-serif"], 
        body: ["Noto Sans", "sans-serif"] 
      }
    },
	},
	plugins: [],
}