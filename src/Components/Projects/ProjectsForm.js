import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import '../FormStyles.css'
import './projectForm.css'
import { MIN_LENGTH_TITLE_PROJECTS, TEXT_INPUT_REQUIRED } from '../../constants'
import { getBase64 } from '../../utils'
import { postProjects, updateProjects } from '../../Services/projectsService'
import BasicAlert from '../UI/Alerts/BasicAlert'

const validate = (values) => {
	const errors = {}

	// Validations for title
	if (!values.title) {
		errors.title = TEXT_INPUT_REQUIRED
	} else if (values.title.length < MIN_LENGTH_TITLE_PROJECTS) {
		errors.title = `El título debe tener al menos ${MIN_LENGTH_TITLE_PROJECTS} caracteres`
	}

	// Validations for description
	if (!values.description) {
		errors.description = TEXT_INPUT_REQUIRED
	}

	// Validations for image
	if (!values.image) {
		errors.image = TEXT_INPUT_REQUIRED
	} else if (values.image) {
		const file = document.querySelector('input[name=image]').files[0]
		const fileType = file.type
		const validImageTypes = ['image/jpg', 'image/png']
		const size = file.size
		if (!validImageTypes.includes(fileType) || size >= 5000000) {
			errors.image =
				'Seleccione una imagen con formato jpg o png y con un tamaño menor a 5MB'
		}
	}

	// Validations for due_date
	if (
		!/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/i.test(
			values.due_date
		) &&
		values.due_date
	) {
		errors.due_date = 'Debe escoger una fecha valida'
	}

	return errors
}
const ProjectsForm = ({ mode = 'edit', project }) => {
	const [formValues] = useState({
		title: mode === 'create' ? '' : project?.title,
		description: mode === 'create' ? '' : project?.description,
		image: mode === 'create' ? '' : project?.image,
		due_date: mode === 'create' ? '' : project?.due_date,
	})

	const handleSubmit = async (data) => {
		const image = document.querySelector('input[name=image]').files[0]

		data.image = await getBase64(image)

		const dataObject = {
			title: data.title,
			description: data.description,
			image: data.image,
			due_date: data.due_date,
		}
		if (mode === 'create') {
			try {
				await postProjects(dataObject)
			} catch {
				BasicAlert(
					'error',
					'Error',
					'Ha ocurrido un error al crear el proyecto, inténtelo de nuevo'
				)
			}
		} else {
			try {
				await updateProjects(project?.id, dataObject)
			} catch {
				BasicAlert(
					'error',
					'Error',
					'Ha ocurrido un error al actualizar el proyecto, inténtelo de nuevo'
				)
			}
		}
	}

	return (
		<Formik
			initialValues={formValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			{({ errors, handleBlur, touched, handleChange }) => (
				<Form className="projects-form">
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
					<div className="form-group">
						<label htmlFor="image">Imagen del proyecto</label>
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
					</div>
					<div className="form-group">
						<label htmlFor="due_date">Fecha de Vencimiento</label>
						<input
							type="date"
							name="due_date"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.due_date && errors.due_date ? (
							<div className="alert-danger">{errors.due_date}</div>
						) : null}
					</div>
					<button className="submit-btn" type="submit">
						Enviar
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default ProjectsForm
