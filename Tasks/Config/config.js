module.exports = {
	sass: {
		outputStyle: 'nested'
	},
	htmlmin: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
		collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
	},
	imgPaths: [
		'./Images/**/raw_*.svg',
		'./Images/**/raw_*.png',
		'./Images/**/raw_*.jpg'
	],
	autoprefix: {
		browsers: ['last 2 versions']
	}
}