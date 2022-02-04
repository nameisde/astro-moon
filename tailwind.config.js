module.exports = {
	theme: {
		extend: {
		  fontFamily: {
			'sans': ["Plus Jakarta Sans"],
			'clash': ["Clash Display"],
		  },
		},
		colors: {
			'moon-green-900': "#225851",
			'moon-green-800': "#28665E",
			'moon-green-700': "#53857E",
			'moon-green-600': "#7EA39E",
			'moon-green-500': "#A9C2BF",
			'moon-black-900': "#161616",
			'moon-black-800': "#4A4A4A",
			'moon-black-700': "#7E7E7E",
			'moon-black-600': "#B1B1B1",
			'moon-black-500': "#E5E5E5",
			'moon-cream-900': "#EEE6C6",
			'moon-cream-800': "#F1EAD1",
			'moon-cream-700': "#F3EFDD",
			'moon-cream-600': "#F6F3E8",
			'moon-cream-500': "#F8F7F3",
		  },
	},
	content: [
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
	],
	plugins: [
		require('@tailwindcss/typography'),
	]
};
