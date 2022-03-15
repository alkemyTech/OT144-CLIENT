import React, { useState } from 'react'
import { Formik } from 'formik'
import './stylesLogin.css'
import '../FormStyles.css'
import { store } from '../../app/store'
import axios from 'axios'
import { baseURL } from '../../Services/Api'
import { login } from '../../actions/actions'

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
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const handleSubmit = async (e) => {
		e.preventDefault()

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
				console.log(res)
			})
			.then(() => {
				localStorage.setItem('email', values.email)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleChange = (e) => {
		setValues({ ...values, [e.target.type]: e.target.value })
	}

	return (
		<Formik initialValues={values} validate={validation}>
			{(props) => {
				return (
					<div className="form-container login">
						<form onSubmit={handleSubmit}>
							<h2 className="title">Iniciar sesión</h2>
							<input
								className="input-field"
								type="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								placeholder="Correo electrónico"
							></input>
							<div className="div-error">
								{props.touched.email && props.errors.email}
							</div>
							<input
								className="input-field"
								type="password"
								name="password"
								value={values.password}
								onChange={handleChange}
								placeholder="Contraseña"
							></input>
							<div className="div-error">
								{props.touched.password && props.errors.password}
							</div>
							<button className="submit-btn" type="submit">
								Iniciar sesión
							</button>
						</form>
					</div>
				)
			}}
		</Formik>
	)
}

export default LoginForm
