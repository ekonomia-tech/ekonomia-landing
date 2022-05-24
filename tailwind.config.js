module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		height: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			full: "100%",
			screen: "calc(var(--vh) * 100)",
		}),
		minHeight: (theme) => ({
			0: "0",
			...theme("spacing"),
			full: "100%",
			screen: "calc(var(--vh) * 100)",
		}),

		extend: {
			backgroundImage: {
				"pattern-image": "url(/images/bg.png)",
			},
			colors: {
				"gradient-1": "#8b4513",
				"gradient-2": "#824b18",
				"gradient-3": "#7a501c",
				"gradient-4": "#735520",
				"gradient-5": "#6b5b24",
				"gradient-6": "#616329",
				"gradient-7": "#556b2f",
			},
			backgroundColor: {
				primary: "#222",
				secondary: "#FFF",
				success: "#198754",
				error: "#FF0000",
				gg: "linear-gradient(188.67deg, #111111 9.85%, #555555 36.3%, #616329 57.37%, #735520 77.99%, #8B4513 95.93%);",
			},
			textColor: {
				primary: "#ddd",
				secondary: "#ddd",
				accent: "#ddd",
			},
			borderColor: {
				primary: "#999",
				secondary: "#555",
				transparent: "rgba(0,0,0,0)",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "100" },
				},
				slideUp: {
					"0%": { marginTop: "1000px" },
					"100%": { marginTop: "0" },
				},
				slideLeft: {
					"0%": { translateX: "1000px" },
					"100%": { translateX: "0" },
				},
				slideRight: {
					"0%": { marginRight: "1000px" },
					"100%": { marginRight: "0" },
				},
				lightpulse: {
					"0%": { borderColor: "rgba(255,255,255,0)" },
					"50%": { borderColor: "rgba(255,255,255,0.5)" },
					"100%": { borderColor: "rgba(255,255,255,0)" },
				},
				pulseblue: {
					"0%": { backgroundColor: "rgb(22,22,22)" },
					"50%": { backgroundColor: "rgb(37,99,235)" },
					"100%": { backgroundColor: "rgb(22,22,22)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.8s ease-in-out",
				slideUp: "slideUp 1s ease-in-out",
				slideLeft: "slideLeft 0.3s linear",
				slideRight: "slideRight 0.3s linear",
				lightpulse: "lightpulse 2.5s infinite",
				pulseblue: "pulseblue 2.5s infinite",
			},
		},
		fontFamily: {
			poppins: ["Poppins"],
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
