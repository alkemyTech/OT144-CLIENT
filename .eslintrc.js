module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	ignorePatterns: ['/public'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		indent: ['error', 'tab'],
	},
}
