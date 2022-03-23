import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import PublicHeader from './PublicHeader'
import '@testing-library/jest-dom/extend-expect'
import { isLogin } from '../../UI/Errors/UserNotLogged'

describe('test in <PublicHeader />', () => {
	test('should show public links, login and registration if user not authenticated', () => {
		render(
			<BrowserRouter>
				<PublicHeader />
			</BrowserRouter>
		)
		const isLoginTest = isLogin()
		const register = screen.getByTestId('button-register')
		const login = screen.getByTestId('button-login')

		expect(isLoginTest).not.toBe(false)
		expect(register).toBeInTheDocument()
		expect(login).toBeInTheDocument()
		expect(register.textContent).toBe('Registrate')
		expect(login.textContent).toBe('Inicia sesión')
	})
	test('should not show public links, login and registration if user authenticated', () => {
		render(
			<BrowserRouter>
				<PublicHeader />
			</BrowserRouter>
		)
		const isLoginTest = isLogin()
		const register = screen.getByTestId('button-register')
		const login = screen.getByTestId('button-login')

		expect(isLoginTest).not.toBe(true)
		expect(register).not.toBeInTheDocument()
		expect(login).not.toBeInTheDocument()
		expect(register.textContent).not.toBe('Registrate')
		expect(login.textContent).not.toBe('Inicia sesión')
	})
	// test('should not show public links, login and registration if user authenticated', () => {

	// 	render(
	// 		<BrowserRouter>
	// 	 		<PublicHeader />
	// 	 	</BrowserRouter>
	// 	);

	// })
})
