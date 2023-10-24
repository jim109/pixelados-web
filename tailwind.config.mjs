/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A', 'Gotham SSm B', 'sans-serif']
		},
		colors: {
			'primary-100': '#2C3E50',
			'primary-200':'#57687c',
			'primary-300':'#b4c7dd',
			'accent-100':'#F7CAC9',
			'accent-200':'#926b6a',
			'text-100':'#333333',
			'text-200':'#5c5c5c',
			'text-300':'#F2F2F2',
			'bg-100':'#F2F2F2',
			'bg-200':'#e8e8e8',
			'bg-300':'#bfbfbf',
		},
		extend: {},
	},
	plugins: [],
}
