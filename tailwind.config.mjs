/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
				rubik: ['Rubik', 'Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: '#25252B',
				white: '#FEFEFE',
				'royal-blue': '#4366E1',
				'mint': '#21AB91',
				'cool-gray': '#A9A9BC',
			},
			backgroundImage: {
				'blue-mint-gradient': 'linear-gradient(45deg, var(--royal-blue) 0%, var(--mint) 75%)',
			},
		},
	},
	plugins: [],
}
