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

/**
 * Se creo un test que valide que no se haga submit si no está correctamente completo. Además, debe mostrar el mensaje de error al usuario.
 * El mismo recibe los datos de nombre, apellido, email, contraseña y confirmar contraseña.
 * En este caso, se envía el valor de confirmar contraseña de manera incorrecta (no es igual a la contraseña).
 * Lo que se espera es que el submit no sea llamado si el formulario tiene errores y al mismo tiempo, que aparezca el error en el input de
 * confirmación de contraseña.
 *
 * El test pasa correctamente.
 * Ejecutado el 21/03/2022
 */

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

/**
 * Se creo un test que valide que si los campos están completos correctamente, haga una petición post y cree un usuario.
 * El mismo recibe los datos de nombre, apellido, email, contraseña y confirmar contraseña de manera correcta.
 * Lo que se espera es que se haga la petición y que la respuesta sea un objeto que devuelva la data con el nombre y el mail, el mensaje de usuario
 * guardado correctamente y la propiedad success en true.
 * Luego se borra el usuario creado con el id de usuario que trae la respuesta para que no quede en la base de datos.
 *
 * Si el test se ejecuta nuevamente, hay que cambiar el mail ya que la api retorna un error de que el usuario ya existe, a pesar de que fue borrado.
 *
 * El test pasa correctamente.
 * Ejecutado el 21/03/2022
 */

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

/**
 * Se creo un test que valide que se haga una petición post y que retorne un error si el mail ya existe en la base de datos.
 * El mismo recibe los datos de nombre, apellido, email, contraseña y confirmar contraseña de manera correcta pero el email que recibe es de un
 * usuario ya creado.
 * Lo que se espera es que se haga la petición y que la respuesta sea un objeto que devuelva el mensaje de que la data enviada es inválida.
 *
 * El test pasa correctamente.
 * Ejecutado el 21/03/2022
 */

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
