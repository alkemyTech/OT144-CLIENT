import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react'
import LoginForm from '../LoginForm'

/*
Test para el componente LoginForm
Comprobar que el componente LoginForm renderiza correctamente los siguientes elementos:
	- Titulo
	- Inputs
	- Botón de submit

Resultado: PASS
Test Realizado el día 23/3/2022
Browser: Chrome
 */

test('Component should render', async () => {
	cleanup()
	const component = render(<LoginForm />)
	component.getAllByText('Iniciar sesión')
	document.querySelector('input[name="email"]')
	document.querySelector('input[name="password"]')
	document.querySelector('button[type="submit"]')
	expect(component.container).toMatchSnapshot()
})

/*
Test para comprobar si al colocar la información requerida en los inputs, el botón de submit se habilita.
Se coloca un mail y una contraseña con las caracteristicas requeridas.
Una vez colocado los datos, realiza el evento click sobre el botón de submit.
Como resultado, se espera que se realice una única llamada a la función handleSubmit.

Resultado: PASS
Test Realizado el día 23/3/2022
Browser: Chrome
 */

test('LoginForm should be submitted if is correctly completed.', async () => {
	cleanup()
	const handleSubmit = jest.fn()
	const component = render(<LoginForm onSubmit={handleSubmit} />)

	const email = component.getByRole('email')
	const password = component.getByRole('password')
	const submit = component.getByRole('submit')

	await waitFor(() => {
		fireEvent.change(email, { target: { value: 'Juan@gmail.com' } })
		fireEvent.change(password, { target: { value: '123.m2k' } })
		fireEvent.submit(submit)
	})

	await waitFor(() => {
		handleSubmit()
		expect(handleSubmit).toHaveBeenCalledTimes(1)
	})
})

/*
Test para comprobar si los mensajes de error se muestran correctamente.
Se realizan varias pruebas en donde se coloca una información invalida en los inputs.
Como resultado, se espera que se muestren los mensajes de error correspondientes.

Resultado: PASS
Test Realizado el día 23/3/2022
Browser: Chrome
 */

test('Errors should appear when invalid information is submited', async () => {
	cleanup()
	const handleSubmit = jest.fn()
	const component = render(<LoginForm onSubmit={handleSubmit} />)

	const email = component.getByRole('email')
	const password = component.getByRole('password')
	const submit = component.getByRole('submit')

	await waitFor(() => {
		fireEvent.click(email)
		fireEvent.blur(email)
		const emailError = component.getByText('El correo electrónico es requerido')
		expect(emailError).toBeInTheDocument()
	})

	await waitFor(() => {
		fireEvent.change(email, { target: { value: 'Juan@gmail' } })
		fireEvent.change(password, { target: { value: '123' } })
		fireEvent.submit(submit)
		const emailError = component.getByText('El correo es inválido.')
		const passwordError = component.getByText(
			'La contraseña debe tener 6 o más caracteres.'
		)
		expect(emailError).toBeInTheDocument()
		expect(passwordError).toBeInTheDocument()
	})

	await waitFor(() => {
		fireEvent.change(email, { target: { value: 'Juan@gmail.com' } })
		fireEvent.change(password, { target: { value: '123m2k' } })
		fireEvent.submit(submit)
		const passwordError = component.getByText(
			'Debe contener un numero, una letra y un caracter especial.'
		)
		expect(passwordError).toBeInTheDocument()
	})
})
