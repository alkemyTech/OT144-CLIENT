import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Formik, Field, Form } from 'formik'
import {
	postActivities,
	updateActivities,
} from '../../../Services/activitiesService'
import './ActivitiesForm.css'
import { getBase64 } from '../../../utils'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import BasicAlert from '../../UI/Alerts/BasicAlert'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'

const ActivitiesForm = ({ activity, mode, loading }) => {
	const [initialValues, setInitialValues] = useState({
		id: '',
		name: '',
		description: '',
		image: '',
	})
	useEffect(() => {
		if (mode === 'edit') {
			setInitialValues({
				id: activity.id,
				name: activity.name,
				description: activity.description,
				image: activity.image,
			})
		}
	}, [activity])

	const validate = (values) => {
		const errors = {}
		if (!values.name) {
			errors.name = 'requerido'
		}
		if (!values.image) {
			errors.image = 'requerido'
		}
		return errors
	}

	const inputCKeditorHandler = (event, editor) => {
		const data = editor.getData()
		setInitialValues({ ...initialValues, description: data })
	}

	const submitData = async (data) => {
		const image = document.querySelector('input[name=image]').files[0]
		data.image = await getBase64(image)
		const dataObject = {
			name: data.name,
			description: initialValues.description,
			image: data.image,
		}
		let response = ''
		if (mode === 'create') {
			response = await postActivities(dataObject)
		} else {
			response = await updateActivities(activity.id, dataObject)
		}
		if (response.status === 200) {
			BasicAlert({
				type: 'success',
				title: 'OK',
				text: `Actividad ${mode === 'create' ? 'creada' : 'actualizada'}`,
			})
			setTimeout(() => {
				window.location.href = '/backoffice/activities'
			}, 1900)
		} else {
			return (
				<>
					<ErrorAlert title="Error" text="No pudo realizarse el pedido" />
					{setTimeout(() => {
						window.location.reload()
					}, 1900)}
				</>
			)
		}
	}

	if (loading) {
		return (
			<div className="spinner-container">
				<SpinnerComponent loading={true} />
			</div>
		)
	}
	return (
		<main>
			<div className="container-flex">
				<div className="form-container-activities">
					<Formik
						onSubmit={submitData}
						initialValues={initialValues}
						validate={validate}
					>
						{({ errors, touched, handleBlur, handleChange }) => (
							<Form>
								<label>Nombre</label>
								<Field
									className="input-field"
									type="text"
									placeholder="Nombre"
									name="name"
									onBlur={handleBlur}
								/>
								{touched.name && errors.name ? <div>{errors.name}</div> : null}
								<label>Imagen</label>
								<input
									className="input-field"
									type="file"
									name="image"
									accept=".png, .jpg"
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.image && errors.image ? (
									<div>{errors.image}</div>
								) : null}
								<label>Descripción</label>
								<CKEditor
									editor={ClassicEditor}
									data={initialValues.description}
									onChange={inputCKeditorHandler}
									className="ckEditor"
								/>
								<div className="btn-container">
									<button className="submit-btn" type="submit">
										{activity ? 'Actualizar' : 'Enviar'}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>
	)
}

export default ActivitiesForm
