module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xlg': '1040px',
			'xl': '1280px',
			'2xl': '1536px',
		  },
		extend: {
			colors: {
				'gray-150': '#F2F2F2',
				afa: {
					'greenPastel': '#BDE8C6'
				},
			},
			spacing: {
				'68': '17rem',
				'81': '21rem',
				'97': '26rem',
				'350': '350px',
				'380': '380px',
			},
		},
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
