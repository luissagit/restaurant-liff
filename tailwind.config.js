module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		secondary: "#252525",
    		primary: {
    			"100": "#ECECEC",
    			"200": "#F5F5F5",
    		},
    		green: "#3ECE79",
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
