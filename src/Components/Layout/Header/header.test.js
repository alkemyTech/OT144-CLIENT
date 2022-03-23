import '@testing-library/jest-dom'

describe('test on the header component', () => {
	test('shoul true', () => {
		// 1.inicializacion
		const mensaje = 'hola Mundo'
		// 2.estimulo
		const mensaje2 = 'hola Mundo'
		// 3.Observar el comportamiento
		expect(mensaje).toBe(mensaje2)
	})
})
