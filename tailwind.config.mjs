/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}

module.exports = {
	content: ["./src/**/*.{html,js,astro}"],
	theme: {
	  extend: {
		backgroundColor:{
			'orange-bg': '#F6693C',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/aspect-ratio'),
	],
  };


