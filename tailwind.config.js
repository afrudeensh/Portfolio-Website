// tailwind.config.js
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			colors: {
				'light-grey': '#f5f5f5',
				'soft-beige': '#f8f8f4',
				'bright-teal': '#00ADB5',
				'cheerful-aqua': '#00C3DA',
				'soft-orange': '#FF7F50',
				'subtle-lime': '#CDEB8A',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			// --- Custom Animations ---
			animation: {
				'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
				'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
				'pulse-slow': 'pulseSlow 4s infinite ease-in-out', // For subtle background blobs
			},
			keyframes: {
				fadeInDown: {
					'from': { opacity: '0', transform: 'translateY(-20px)' },
					'to': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInUp: {
					'from': { opacity: '0', transform: 'translateY(20px)' },
					'to': { opacity: '1', transform: 'translateY(0)' },
				},
				scaleIn: {
					'from': { opacity: '0', transform: 'scale(0.9)' },
					'to': { opacity: '1', transform: 'scale(1)' },
				},
				fadeInLeft: {
					'from': { opacity: '0', transform: 'translateX(-20px)' },
					'to': { opacity: '1', transform: 'translateX(0)' },
				},
				pulseSlow: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
			},
			// --- End Custom Animations ---
			animation: {
				'fade-in-left': 'fadeInLeft 1s ease-out forwards',
				'fade-in-up': 'fadeInUp 1s ease-out forwards',
				'zoom-in': 'zoomIn 0.8s ease-out forwards',
				'bounce-in': 'bounceIn 1s ease forwards',
			},
			keyframes: {
				fadeInLeft: {
					'0%': { opacity: 0, transform: 'translateX(-50px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				fadeInUp: {
					'0%': { opacity: 0, transform: 'translateY(30px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				zoomIn: {
					'0%': { opacity: 0, transform: 'scale(0.8)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
				bounceIn: {
					'0%': { opacity: 0, transform: 'scale(0.5)' },
					'60%': { transform: 'scale(1.2)' },
					'80%': { transform: 'scale(0.95)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
			}
		},
	},
	plugins: [],
}