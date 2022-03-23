import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Formik } from 'formik'
import {
	postActivities,
	updateActivities,
} from '../../../Services/activitiesService'
import './ActivitiesForm.css'
import { getBase64 } from '../../../utils'
import BasicAlert from '../../UI/Alerts/BasicAlert'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'

const ActivitiesForm = ({ activity, mode }) => {
	const [initialValues, setInitialValues] = useState({
		id: '',
		name: '',
		description: '',
		image: '',
	})

	const [IsActivity, SetIsActivity] = useState(false)
	const [status, setStatus] = useState()

	useEffect(() => {
		if (mode === 'edit') {
			SetIsActivity(true)
			setInitialValues(activity)
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

	const changeHandleFile = async (e) => {
		const file = e.target.files[0]
		const fileConvert = await getBase64(file)
		setInitialValues({ ...initialValues, image: fileConvert })
	}

	const inputCKeditorHandler = (event, editor) => {
		const data = editor.getData()
		setInitialValues({ ...initialValues, description: data })
	}

	const changeHandleName = (e) => {
		setInitialValues({
			...initialValues,
			name: e.target.value,
		})
	}

	const submitData = async (e) => {
		e.preventDefault()
		let response = ''
		if (mode === 'create') {
			response = await postActivities(initialValues)
		} else {
			response = await updateActivities(activity.id, initialValues)
		}
		setStatus(response.status)
	}

	if (status === 200) {
		return (
			<>
				<BasicAlert title="OK" text="Actividad creada" />
				{setTimeout(() => {
					window.location.href = '/backoffice/activities'
				}, 1900)}
			</>
		)
	} else if (status === 422) {
		return (
			<>
				<ErrorAlert title="Error" text="No pudo realizarse el pedido" />
				{setTimeout(() => {
					window.location.reload()
				}, 1900)}
			</>
		)
	}

	return (
		<main>
			<BackOfficeLayout>
				<div className="container-flex">
					<div className="form-container-activities">
						<Formik initialValues={initialValues} validate={validate}>
							{({ errors, touched }) => (
								<form onSubmit={submitData}>
									<label>Nombre</label>
									<input
										className="input-field"
										placeholder={IsActivity ? activity.name : 'Nombre'}
										name="name"
										onChange={changeHandleName}
									/>
									{touched.name && errors.name ? (
										<div>{errors.name}</div>
									) : null}
									<label>Imagen</label>
									<input
										className="input-field"
										type="file"
										accept=".png, .jpg"
										onChange={changeHandleFile}
									/>
									{touched.image && errors.image ? (
										<div>{errors.image}</div>
									) : null}
									<label>Descripción</label>
									<CKEditor
										editor={ClassicEditor}
										data="description"
										onChange={inputCKeditorHandler}
										className="ckEditor"
									/>
									<div className="btn-container">
										<button className="submit-btn" type="submit">
											{IsActivity ? 'Actualizar' : 'Enviar'}
										</button>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</BackOfficeLayout>
		</main>
	)
}

export default ActivitiesForm
