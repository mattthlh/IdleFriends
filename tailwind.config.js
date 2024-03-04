/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			roboto: ['Roboto'],
			playfair: ['Playfair', 'sans-serif'],
		},
		extend: {
			colors: {
				NMHBlue: '#009CDE',
				nmhNavy: '#002855',
				NMHRed: '#7e2d40',
			},
		},
	},
	plugins: [],
}
