import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import '../FormStyles.css'
import { MIN_LENGTH_TITLE_PROJECTS, TEXT_INPUT_REQUIRED } from '../../constants'

const validate = (values) => {
	const errors = {}
	if (!values.title) {
		errors.title = TEXT_INPUT_REQUIRED
	} else if (values.title.length < MIN_LENGTH_TITLE_PROJECTS) {
		errors.title = `El título debe tener al menos ${MIN_LENGTH_TITLE_PROJECTS} caracteres`
	}
	return errors
}
const ProjectsForm = () => {
	const [formValues] = useState({
		title: '',
		description: '',
		image: '',
		due_date: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formValues)
	}

	return (
		<Formik
			initialValues={formValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			{({ errors, handleBlur, touched, handleChange }) => (
				<Form>
					<Field
						className="input-field"
						type="text"
						name="title"
						placeholder="Título del Proyecto"
						onBlur={handleBlur}
					/>
					{touched.title && errors.title ? (
						<div className="alert-danger">{errors.title}</div>
					) : null}

					<Field
						className="input-field"
						type="text"
						name="description"
						placeholder="Escribe una descripción"
						onBlur={handleBlur}
					/>
					{touched.description && errors.description ? (
						<div className="alert-danger">{errors.description}</div>
					) : null}

					<input
						type="file"
						name="image"
						accept="image/*"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{touched.image && errors.image ? (
						<div className="alert-danger">{errors.image}</div>
					) : null}

					<input type="date" name="due_date" onBlur={handleBlur} />
					{touched.due_date && errors.due_date ? (
						<div className="alert-danger">{errors.due_date}</div>
					) : null}

					<button className="submit-btn" type="submit">
						Crear
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default ProjectsForm
