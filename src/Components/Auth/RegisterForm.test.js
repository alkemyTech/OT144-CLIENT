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

test('RegisterForm shouldn´t be submitted if it is not correctly completed. Passwords are not the same. It should render an error message', async () => {
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

	await waitFor(() => {
		expect(onSubmit).toHaveBeenCalledTimes(0)
	})
	await waitFor(() => {
		errorMessage = getByTestId('error-password_confirmation')
		expect(errorMessage).not.toBeNull()
	})
})

/* const axios = jest.mock("axios");

test("renders learn react link", () => {
	axios.get.mockImplementation(() => {
		return {
			data: {
				userId: 1,
				id: 1,
				title: "delectus aut autem",
				completed: false,
			},
		};
	});

	render(<RegisterForm />);

	expect(screen.getByText(/React App/i)).toBeInTheDocument();
}); */
