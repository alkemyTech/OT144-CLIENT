import React, { useState } from 'react'
import '../FormStyles.css'
import { Formik } from 'formik'
import { createUser } from '../../Services/userService'
import TermsAndConditions from '../UI/TermsAndConditions/TermsAndConditions'
import '../UI/TermsAndConditions/TermsAndConditions.css'

const RegisterForm = () => {
	const [acceptTerms, setAcceptTerms] = useState(false)
	const formValues = [
		{
			type: 'text',
			name: 'name',
			placeholder: 'Ingrese su nombre',
			validate: (value) => {
				if (!value) {
					return 'El nombre es requerido'
				}
			},
		},
		{
			type: 'text',
			name: 'lastName',
			placeholder: 'Ingrese su apellido',
			validate: (value) => {
				if (!value) {
					return 'El apellido es requerido'
				}
			},
		},
		{
			type: 'email',
			name: 'email',
			placeholder: 'Ingrese su email',
			validate: (value) => {
				if (!value) {
					return 'El email es requerido'
				}

				const emailPattern =
					// eslint-disable-next-line
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				if (!emailPattern.test(value)) {
					return 'El formato del email es incorrecto'
				}
			},
		},
		{
			type: 'password',
			name: 'password',
			placeholder: 'Ingrese su contraseña',
			validate: (value) => {
				if (!value) {
					return 'La contraseña es requerida'
				}
				const PasswordPattern =
					/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#$%^&*()]{6,}$/ //
				if (!PasswordPattern.test(value)) {
					return 'Las contraseñas deben tener al menos 6 caracteres, una letra, un número y un caracter especial'
				}
			},
		},
		{
			type: 'password',
			name: 'password_confirmation',
			placeholder: 'Confirme su contraseña',
			validate: (value) => {
				return !value && 'La confirmación de la contraseña es requerida'
			},
		},
	]

	const validate = (values) => {
		const errors = {}
		formValues.forEach(({ validate, name }) => {
			if (validate(values[name])) {
				errors[name] = validate(values[name])
			}
		})

		if (
			!errors.password_confirmation &&
			values.password !== values.password_confirmation
		) {
			errors.password_confirmation =
				'La confirmación de la contraseña no coincide con la original'
		}
		return errors
	}

	const registerUser = async (values) => {
		try {
			await createUser(values)
		} catch (e) {
			alert(e)
		}
	}

	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false)
		acceptTerms
			? registerUser(values)
			: alert('Debe aceptar los terminos y condiciones para registrarte')
	}

	const handleChangeCheckbox = () => setAcceptTerms(!acceptTerms)

	return (
		<Formik
			initialValues={{}}
			validate={validate}
			onSubmit={(values, helpers) => handleSubmit(values, helpers)}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleSubmit,
				isSubmitting,
			}) => (
				<form className="form-container" onSubmit={handleSubmit}>
					{formValues.map((item) => (
						<React.Fragment key={item.name}>
							<input
								type={item.type}
								name={item.name}
								onChange={handleChange}
								value={values[item.name]}
								placeholder={item.placeholder}
								className="input-field"
							/>
							{errors[item.name] && touched[item.name] && errors[item.name]}
						</React.Fragment>
					))}

					<div className="terms-container">
						<input
							className="terms-checkbox"
							type="checkbox"
							value={acceptTerms}
							onChange={handleChangeCheckbox}
						/>
						<label className="terms-text">
							Aceptar Terminos y condiciones de uso
						</label>
					</div>
					<TermsAndConditions />
					<button type="submit" className="submit-btn" disabled={isSubmitting}>
						Enviar
					</button>
				</form>
			)}
		</Formik>
	)
}

export default RegisterForm
