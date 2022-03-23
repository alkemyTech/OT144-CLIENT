import React from 'react'
import ContactForm from './ContactForm'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react'

// El siguiente test valida que los campos existan, tambien de que los valores sean agregados correctamente.
// El test pasa correctamente
// Ejecutado el 22/03/22

test('ContactForm should render and add values correctly', async () => {
	cleanup()
	const handleSubmit = jest.fn()
	const { getByTestId } = render(<ContactForm onSubmit={handleSubmit} />)

	const name = getByTestId('name')
	const email = getByTestId('email')
	const phone = getByTestId('phone')
	const message = getByTestId('message')
	const submit = getByTestId('submit')

	await waitFor(() => {
		fireEvent.change(name, { target: { value: 'Juan' } })
		fireEvent.change(email, {
			target: { value: 'Juan@gmail.com' },
		})
		fireEvent.change(phone, {
			target: { value: '0111093123' },
		})
		fireEvent.change(message, {
			target: { value: 'Hola Juan! esto es un mensaje' },
		})
		fireEvent.submit(submit)
	})
})
