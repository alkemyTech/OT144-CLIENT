import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import PublicHeader from './PublicHeader'
import '@testing-library/jest-dom/extend-expect'
import { isLogin } from '../../UI/Errors/UserNotLogged'

/*
Se crea test para el header <PublicHeader />

*/
describe('test in <PublicHeader />', () => {
	/*
	Se crea un test que nos verifique los links del header 
	- Se busca que no se este Autenticado 
	*/
	test('should show public links, login and registration if user not authenticated', () => {
		render(
			<BrowserRouter>
				<PublicHeader />
			</BrowserRouter>
		)
		const isLoginTest = isLogin()
		const register = screen.getByTestId('button-register')
		const login = screen.getByTestId('button-login')
		/* 
		Se verifica que este Logueado (isLoginTest).not.
		*/
		expect(isLoginTest).not.toBe(false)
		/* 
		Se verifica que register y login esten el documento
		*/
		expect(register).toBeInTheDocument()
		expect(login).toBeInTheDocument()
		/* 
		Se verifica que el texto register y login esten el contenido
		*/
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
		/* 
		Se verifica que este Logueado (isLoginTest)
		*/
		expect(isLoginTest).not.toBe(true)
		/* 
		Se verifica que register y login no esten el documento
		*/
		expect(register).not.toBeInTheDocument()
		expect(login).not.toBeInTheDocument()
	})
})
