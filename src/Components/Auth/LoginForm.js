import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './stylesLogin.css'
import '../FormStyles.css'
import { store } from '../../app/store'
import axios from 'axios'
import { baseURL } from '../../Services/Api'
import { login } from '../../actions/actions'
import { useHistory } from 'react-router-dom'

const validation = (values) => {
	const errors = {}

	if (!values.email) {
		errors.email = 'El correo electrónico es requerido'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'El correo es inválido.'
	}

	if (values.password.length < 6) {
		errors.password = 'La contraseña debe tener 6 o más caracteres.'
	} else if (
		// eslint-disable-next-line
		!/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(
			values.password
		)
	) {
		errors.password =
			'Debe contener un numero, una letra y un caracter especial.'
	}

	return errors
}

const LoginForm = () => {
	const history = useHistory()
	const [values] = useState({
		email: '',
		password: '',
	})

	const handleSubmit = async (values) => {
		axios({
			method: 'post',
			url: `${baseURL}/login`,
			data: { email: values.email, password: values.password },
		})
			.then((res) => {
				store.dispatch(
					login({
						// token: res.data.data.token,
						user: res.config.data,
					})
				)
				
				history.push('/backoffice')
			})
			.then(() => {
				localStorage.setItem('email', values.email)
				localStorage.setItem('role_id', 1)
				window.location.href = '/'
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Formik
			initialValues={values}
			validate={validation}
			onSubmit={handleSubmit}
		>
			{({ handleChange, errors, touched, values }) => {
				return (
					<Form className="form-container login">
						<h2 data-testid="title" className="title">
							Iniciar sesión
						</h2>
						<Field
							role="email"
							className="input-field"
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							placeholder="Correo electrónico"
						/>
						{errors.email && touched.email && (
							<div className="div-error" role="error">
								{errors.email}
							</div>
						)}
						<Field
							role="password"
							className="input-field"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							placeholder="Contraseña"
						/>
						{errors.password && touched.password && (
							<div className="div-error">{errors.password}</div>
						)}
						<button
							role="submit"
							data-testid="submit"
							className="submit-btn"
							type="submit"
						>
							Iniciar sesión
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
