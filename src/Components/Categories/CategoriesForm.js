import React, { useState } from 'react'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import '../FormStyles.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './stylesCategoriesForm.css'
import {
	createCategories,
	updateCategory,
} from '../../Services/categoriesService'

const CategoriesForm = (props) => {
	const categories = props?.location.state[0].category
	const categoriesBtn = props?.btnCat // si es true viene del componente crear, si es false de actualziar
	const id = props?.data?.id
	const [initialValues, setInitialValues] = useState({
		name: categories?.name ? categories.name : '',
		description: categories?.description ? categories.description : '',
		image: React.createRef(),
	})
	console.log(props.location.state.category)
	console.log(props.location.state[0].category)
	const [imgPost, setImgPost] = useState('')

	const bodyFormCategory = [
		{
			name: initialValues.name,
			description: initialValues.description,
			image: imgPost,
		},
		{
			name: initialValues.name,
			description: initialValues.description,
		},
	]

	const [messageAlert, setMessageAlert] = useState({
		msjFormIncomplete: false,
		msjFormIncompleteImg: false,
		msjFormIncompleteDes: false,
		loandingForm: false,
		messageErrorCategory: false,
		messageOkCategory: false,
	})

	function getBase64(file) {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = function () {
			setImgPost(reader.result)
			setMessageAlert({ ...messageAlert, msjFormIncompleteImg: false })
		}
		reader.onerror = function (error) {
			console.log('Error: ', error)
		}
	}

	const handleChange = (e) => {
		if (e.target.name === 'name') {
			setInitialValues({ ...initialValues, name: e.target.value })
			setMessageAlert({ ...messageAlert, msjFormIncomplete: false })
		}
	}

	const handleCkreditor = (e, editor) => {
		const data = editor.getData()
		setInitialValues({ ...initialValues, description: data })
		setMessageAlert({ ...messageAlert, msjFormIncompleteDes: false })
	}

	const customSetAlert = (status) => {
		setMessageAlert({
			...messageAlert,
			loandingForm: status.loading,
			messageOkCategory: status.messageOk,
			messageErrorCategory: status.messageCategory,
		})
	}

	const customUpdateCategory = async (data, status) => {
		const response = await updateCategory(id, data)
		if (response.data) {
			customSetAlert({
				loading: status.loading,
				messageOk: status.messageOk,
				messageCategory: status.messageCategory,
			})
		}
	}

	const checkImg =
		imgPost === '' ||
		!/\.(jpg|png)$/i.test(initialValues.image?.current?.files[0].name)

	const checkImgPost = () => {
		if (imgPost !== '') {
			if (!/\.(jpg|png)$/i.test(initialValues.image?.current?.files[0].name)) {
				setMessageAlert({ ...messageAlert, msjFormIncompleteImg: true })
			} else {
				try {
					customUpdateCategory(bodyFormCategory[0], {
						loading: false,
						messageOk: true,
						messageCategory: false,
					})
				} catch (error) {
					customSetAlert({
						loading: false,
						messageOk: false,
						messageCategory: true,
					})
				}
			}

			return
		}

		try {
			customUpdateCategory(bodyFormCategory[1], {
				loading: false,
				messageOk: true,
				messageCategory: false,
			})
		} catch (error) {
			customSetAlert({
				loading: false,
				messageOk: false,
				messageCategory: true,
			})
		}
	}

	const checkCategoriesBtn = async () => {
		if (categoriesBtn === true) {
			if (checkImg)
				return setMessageAlert({ ...messageAlert, msjFormIncompleteImg: true })

			try {
				const response = await createCategories(bodyFormCategory[0])
				if (response.data) {
					customSetAlert({
						loading: false,
						messageOk: true,
						messageCategory: false,
					})
				}
			} catch (error) {
				customSetAlert({
					loading: false,
					messageOk: false,
					messageCategory: true,
				})
			}
		} else {
			checkImgPost()
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleClick = async () => {
		customSetAlert({ loading: true, messageOk: false, messageCategory: false })
		if (initialValues.name === '' || initialValues.name.length < 4) {
			setMessageAlert({ ...messageAlert, msjFormIncomplete: true })
		} else if (initialValues.description === '') {
			setMessageAlert({ ...messageAlert, msjFormIncompleteDes: true })
		} else {
			checkCategoriesBtn()
		}
	}

	return (
		<BackOfficeLayout>
			<section className="categoriesForm">
				<form
					className="form-container form-container-Category"
					onSubmit={handleSubmit}
				>
					<input
						className="input-field input-field-Category"
						type="text"
						name="name"
						value={initialValues.name}
						onChange={handleChange}
						placeholder="Título"
					></input>
					{messageAlert.msjFormIncomplete && (
						<p className="msjIncompleteForm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-x-circle"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
							Campo obligatorio y debe contener al menos 4 caracteres
						</p>
					)}

					<CKEditor
						className="ckeditorForm"
						editor={ClassicEditor}
						onChange={handleCkreditor}
						data={categories?.description ? categories.description : ''}
					/>
					{messageAlert.msjFormIncompleteDes && (
						<p className="msjIncompleteForm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-x-circle"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
							Campo obligatorio
						</p>
					)}

					<input
						className="input-field input-field-Category"
						type="file"
						ref={initialValues.image}
						name="image"
						onChange={() => getBase64(initialValues.image?.current?.files[0])}
					></input>
					{messageAlert.msjFormIncompleteImg && (
						<p className="msjIncompleteForm">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-x-circle"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
							Campo obligatorio y debe ser formato .jpg o .png
						</p>
					)}

					{messageAlert.loandingForm ? (
						<p className="subtitle">Cargando...</p>
					) : (
						<button className="submit-btn" type="submit" onClick={handleClick}>
							Send
						</button>
					)}

					{messageAlert.messageErrorCategory && (
						<div className="msjErrorCategory">
							<p className="subtitle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									fill="currentColor"
									className="bi bi-x-circle"
									viewBox="0 0 16 16"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
								Error
							</p>
						</div>
					)}
					{messageAlert.messageOkCategory && (
						<div className="msjOkCategory">
							<p className="subtitle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									fill="currentColor"
									className="bi bi-check2-circle"
									viewBox="0 0 16 16"
								>
									<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
									<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
								</svg>
								Tarea realizada
							</p>
						</div>
					)}
				</form>
				{!categoriesBtn && (
					<div className="containerImgCategory">
						<h1 className="bodyTxt">Imagen actual</h1>
						{categories?.image ? (
							<img src={categories?.image} alt="img category"></img>
						) : (
							<p className="bodyTxt">Aún sin imagen</p>
						)}
					</div>
				)}
			</section>
		</BackOfficeLayout>
	)
}

export default CategoriesForm
