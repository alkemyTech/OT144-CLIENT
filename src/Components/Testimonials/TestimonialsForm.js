import React, { useState } from 'react'
import { createTestimonials } from '../../Services/TestimonialsApiService'
import BasicAlert from '../UI/Alerts/BasicAlert'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import '../FormStyles.css'

const TestimonialForm = () => {
	const [initialValues, setInitialValues] = useState({
		name: '',
		description: '',
		image: '',
	})

	const handleChange = (e) => {
		if (e.target.name === 'name') {
			setInitialValues({ ...initialValues, name: e.target.value })
		} else if (e.target.name === 'description') {
			setInitialValues({ ...initialValues, description: e.target.value })
		} else if (e.target.name === 'image') {
			setInitialValues({ ...initialValues, image: e.target.value })
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await createTestimonials(initialValues)
			if (response.status === 200) {
				BasicAlert(
					'success',
					'Mensaje enviado!',
					'Estaremos en contacto en la proximidad',
					1500
				)
			}
		} catch (error) {
			return <ErrorAlert />
		}
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<input
				className="input-field"
				type="text"
				name="name"
				value={initialValues.name}
				onChange={handleChange}
				placeholder="Testimonial Title"
			></input>
			<input
				className="input-field"
				type="text"
				name="description"
				value={initialValues.description}
				onChange={handleChange}
				placeholder="Testimonial Description"
			></input>
			<input
				className="input-field"
				type="text"
				name="image"
				value={initialValues.image}
				onChange={handleChange}
				placeholder="Testimonial Image"
			></input>
			<button className="submit-btn" type="submit">
				Send
			</button>
		</form>
	)
}

export default TestimonialForm
