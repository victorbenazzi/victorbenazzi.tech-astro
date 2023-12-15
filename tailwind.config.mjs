/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {colors: {
			'indigo-hover': '#1F212C',
			'yellowBranding': '#EDCA4C',

		  },
			Animation: {
				blob: "blob 1s infinite"
			},
			
			keyframes: {
				blob: {
					"0%": {
						transform: "scale(1)",
					},
					"33%": {
						transform: "scale(1.5)",
					},
					"66%": {
						transform: "scale(0.5)",
					},
					"100%": {
						transform: "scale(1)",
					}
				}
			}
		},
	},

	plugins: [],
}
