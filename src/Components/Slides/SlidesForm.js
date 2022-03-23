import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../../Components/FormStyles.css'
import { getBase64 } from '../../utils'
import CKEditorNews from '../News/CKEditorNews'
import { createSlide, updateSlide } from '../../Services/slidesService'
import { useHistory } from 'react-router-dom'

const SlidesForm = ({ mode = '', slides }) => {
	const history = useHistory()
	const [formValues] = useState({
		name: mode === 'create' ? '' : slides.title,
		image: mode === 'create' ? '' : slides.image,
		description: mode === 'create' ? '' : slides.description,
	})

	const validation = (values) => {
		const errores = {}
		// Validacion Name
		if (!values.name) {
			errores.name = 'Por favor ingresa un nombre'
		} else if (!/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(values.name)) {
			errores.name = 'El nombre solo puede contener letras y espacios'
		}
		// Validacion Imagen
		if (!values.image) {
			errores.image = 'Campo requerido'
		} else if (values.image) {
			const file = document.querySelector('input[name=image]').files[0]
			const fileType = file.type
			const validImageTypes = ['image/jpeg', 'image/png']
			const size = file.size
			if (!validImageTypes.includes(fileType) || size >= 5000000) {
				errores.image =
					'Seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB'
			}
		}
		// Validacion Description
		if (!values.description) {
			errores.description = 'Por favor ingrese una descripción'
		}
		return errores
	}

	const handleSubmit = async (data) => {
		const image = document.querySelector('input[name=image]').files[0]
		// Get the base64 of the image
		data.image = await getBase64(image)

		const dataObject = {
			name: data.name,
			image: data.image,
			description: data.description,
		}
		// If the mode is "create", the api is called via the POST verb, if not, the PUT verb is called with ID of slides
		if (mode === 'create') {
			handleClickCreate(dataObject)
		} else {
			handleClickUpdate(slides.id, dataObject)
		}
		history.push('/backoffice/slides')
	}

	const handleClickCreate = async (dataObject) => {
		try {
			const response = await Promise.resolve(createSlide(dataObject))
			return {
				status: response.status,
				data: response.data,
			}
		} catch (error) {
			return {
				status: error.response.status,
				error: error.message,
				data: error.response.data,
			}
		}
	}

	const handleClickUpdate = async (id, dataObject) => {
		try {
			const response = await Promise.resolve(updateSlide(id, dataObject))
			return {
				status: response.status,
				data: response.data,
			}
		} catch (error) {
			return {
				status: error.response.status,
				error: error.message,
				data: error.response.data,
			}
		}
	}

	return (
		<Formik
			initialValues={formValues}
			validate={validation}
			onSubmit={handleSubmit}
		>
			{({ errors, handleBlur, handleChange }) => {
				// console.log(errors)
				return (
					<Form className="create-news-form">
						<label>Slide Admin</label>
						<div className="campo">
							<Field
								className="input-field"
								id="name"
								name="name"
								type="text"
								placeholder="Nombre"
							/>
							<ErrorMessage
								name="name"
								component={() => (
									<div className="alert-danger">{errors.name}</div>
								)}
							/>

							<input
								type="file"
								name="image"
								accept="image/*"
								onBlur={handleBlur}
								onChange={handleChange}
							/>
							{errors.image && (
								<div className="alert-danger">{errors.image}</div>
							)}
							<Field name="description">
								{({ field, form }) => (
									<CKEditorNews form={form} field={field} />
								)}
							</Field>
						</div>
						<button type="submit" className="submit-btn">
							Enviar
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default SlidesForm
