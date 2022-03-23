import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import PublicHeader from './PublicHeader'
import '@testing-library/jest-dom/extend-expect'
import { isLogin } from '../../UI/Errors/UserNotLogged'

describe('test in <PublicHeader />', () => {
	test('should show public links, login and registration if user not authenticated', () => {
		// const wrapper = render(
		// 	<BrowserRouter>
		// 		<PublicHeader />
		// 	</BrowserRouter>
		// )
		// wrapper.debug()
		render(
			<BrowserRouter>
				<PublicHeader />
			</BrowserRouter>
		)
		console.log(isLogin())
		expect(screen.getByTestId('button-register')).toBeInTheDocument()
		expect(screen.getByTestId('button-login')).toBeInTheDocument()
		expect(screen.getByTestId('button-register').textContent).toBe('Registrate')
		expect(screen.getByTestId('button-login').textContent).toBe('Inicia sesión')
	})
	test('should not show public links, login and registration if user authenticated', () => {
		render(
			<BrowserRouter>
				<PublicHeader />
			</BrowserRouter>
		)
	})
	// test('should not show public links, login and registration if user authenticated', () => {

	// 	render(
	// 		<BrowserRouter>
	// 	 		<PublicHeader />
	// 	 	</BrowserRouter>
	// 	);

	// })
})
