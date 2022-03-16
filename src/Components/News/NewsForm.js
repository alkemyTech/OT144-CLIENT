import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import '../../Components/FormStyles.css'
import CKEditorNews from './CKEditorNews'
import { getBase64 } from '../../utils'
import { MIN_LENGTH_TITLE_NEWS, TEXT_INPUT_REQUIRED } from '../../constants'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import { getNews, postNews, updateNews } from '../../Services/NewsApiServices'

const validate = (values) => {
	const errors = {}
	// Validations for title
	if (!values.title) {
		errors.title = TEXT_INPUT_REQUIRED
	} else if (values.title.length < MIN_LENGTH_TITLE_NEWS) {
		errors.title = `El título debe tener al menos ${MIN_LENGTH_TITLE_NEWS} caracteres`
	}

	// Validations for category
	if (!values.category) {
		errors.category = TEXT_INPUT_REQUIRED
	}

	// Validations for image
	if (!values.image) {
		errors.image = TEXT_INPUT_REQUIRED
	} else if (values.image) {
		const file = document.querySelector('input[name=image]').files[0]
		const fileType = file.type
		const validImageTypes = ['image/jpeg', 'image/png']
		const size = file.size
		if (!validImageTypes.includes(fileType) || size >= 5000000) {
			errors.image =
				'Seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB'
		}
	}

	// Validations for content
	if (!values.content) {
		errors.content = TEXT_INPUT_REQUIRED
	}

	return errors
}

const NewsForm = ({ mode = 'create', novelity }) => {
	// If the mode is "create" empty values are assigned, if not, the novelity data is assigned
	const [formValues] = useState({
		title: mode === 'create' ? '' : novelity.title,
		category: mode === 'create' ? '' : novelity.category,
		image: mode === 'create' ? '' : novelity.image,
		content: mode === 'create' ? '' : novelity.content,
	})
	const [error, setError] = useState(false)
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getCategories = async () => {
			const response = await getNews()
			setCategories(response.data.data)
		}
		getCategories()
	}, [])

	const handleSubmit = async (data) => {
		// Information is extracted from the input image
		const image = document.querySelector('input[name=image]').files[0]
		// Get the base64 of the image
		data.image = await getBase64(image)
		const dataObject = {
			name: data.title,
			category_id: data.category,
			image: data.image,
			content: data.content,
		}
		// If the mode is "create", the api is called via the POST verb, if not, the PUT verb is called with ID of novelity
		if (mode === 'create') {
			try {
				await postNews(dataObject)
			} catch {
				setError(true)
			}
		} else {
			try {
				await updateNews(novelity.id, dataObject)
			} catch {
				setError(true)
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
				<Form className="create-news-form">
					<Field
						className="input-field"
						type="text"
						name="title"
						placeholder="Título de la Novedad"
						onBlur={handleBlur}
					/>
					{touched.title && errors.title ? (
						<div className="alert-danger">{errors.title}</div>
					) : null}

					<Field
						as="select"
						className="select-field"
						name="category"
						onBlur={handleBlur}
					>
						<option value="" disabled>
							Select category
						</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Field>
					{touched.category && errors.category ? (
						<div className="alert-danger">{errors.category}</div>
					) : null}

					<Field name="content">
						{({ field, form }) => <CKEditorNews form={form} field={field} />}
					</Field>
					{touched.content && errors.content ? (
						<div className="alert-danger">{errors.content}</div>
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

					<button className="submit-btn" type="submit">
						Enviar
					</button>
					{error && <ErrorAlert />}
				</Form>
			)}
		</Formik>
	)
}

export default NewsForm

NewsForm.propTypes = {
	mode: PropTypes.string.isRequired,
	novelity: PropTypes.object,
}
