module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'prettier',
		'plugin:sonarjs/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'sonarjs'],
	ignorePatterns: ['/public', '/src/Components/Categories/CategoriesForm.js'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		indent: ['error', 'tab'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
