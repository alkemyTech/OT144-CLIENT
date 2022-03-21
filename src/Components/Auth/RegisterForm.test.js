import React from 'react'
import RegisterForm from './RegisterForm'
import '@testing-library/jest-dom/extend-expect'
import {
	render,
	fireEvent,
	cleanup,
	waitFor,
	act,
} from '@testing-library/react'
import { createUser, deleteUser } from '../../Services/userService'

test('RegisterForm shouldn´t be submitted if it is not correctly completed. Passwords are not the same. It should render an error message', () => {
	cleanup()
	const onSubmit = jest.fn()
	const { getByRole, getByTestId } = render(
		<RegisterForm onSubmit={onSubmit} />
	)

	const name = getByTestId('name')
	const lastName = getByTestId('lastName')
	const email = getByTestId('email')
	const password = getByTestId('password')
	const confirmationPassword = getByTestId('password_confirmation')
	const checkbox = getByRole('checkbox')
	let errorMessage = ''

	act(() => {
		fireEvent.change(name, { target: { value: 'Marcela' } })
		fireEvent.change(lastName, { target: { value: 'Rodriguez' } })
		fireEvent.change(email, { target: { value: 'hola@hola.com' } })
		fireEvent.change(password, { target: { value: '1234dq!' } })
		fireEvent.change(confirmationPassword, { target: { value: '1234' } })
		fireEvent.click(checkbox)
		fireEvent.submit(getByRole('button', { name: /Enviar/i }))
	})

	waitFor(() => {
		expect(onSubmit).toHaveBeenCalledTimes(0)
	})
	waitFor(() => {
		errorMessage = getByTestId('error-password_confirmation')
		expect(errorMessage).not.toBeNull()
	})
})

// Hay que actualizar el email cada vez que se ejecuta porque sino no se hace la peticion porque el mail figura en la base de datos a pesar de que lo borro

test('RegisterForm should do a post petition and create an user', async () => {
	cleanup()
	const user = await createUser({
		name: 'Marcos',
		lastName: 'Perez',
		email: 'grupo144@alkemy.com.ar',
		password: '1234q!',
		password_confirmation: '1234q!',
	})

	expect(user).toMatchObject({
		data: {
			name: 'Marcos',
			email: 'grupo144@alkemy.com.ar',
		},
		message: 'User saved successfully',
		success: true,
	})

	await deleteUser(user.data.id)
})

test('RegisterForm should do a post petition and return an error because the email exists in the data base', async () => {
	const user = await createUser({
		name: 'Marcos',
		lastName: 'Perez',
		email: 'grupo1@digital.com',
		password: '1234q!',
		password_confirmation: '1234q!',
	})

	expect(user).toMatchObject({
		message: 'The given data was invalid.',
	})
})
