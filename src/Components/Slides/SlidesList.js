import React, { useState, useEffect } from 'react'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import Table from '../UI/Table'
import { Link } from 'react-router-dom'
import { getSlides, deleteSlide } from '../../Services/slidesService'
import { store } from '../../app/store'
import { getSliderActions } from '../../actions/slider'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'

export default function SlidesList() {
	const [slidesData, setSlidesData] = useState([])
	const [count, setCount] = useState(0)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await Promise.resolve(getSlides())
				console.log(response)
				store.dispatch(getSliderActions(response.data.data))
				setLoading(false)
				return setSlidesData(response.data.data)
			} catch (error) {
				return <ErrorAlert />
			}
		})()
	}, [count])

	const handleClickDelete = async (id) => {
		setCount(count + 1)
		try {
			const response = await Promise.resolve(deleteSlide(id))
			return {
				status: response.status,
				data: response.data,
			}
		} catch (error) {
			return <ErrorAlert />
		}
	}

	if (loading) {
		return (
			<BackOfficeLayout>
				<SpinnerComponent loading={loading} />
			</BackOfficeLayout>
		)
	}

	return (
		<BackOfficeLayout>
			<div>
				<h1 className="headerTxt">Slides</h1>
				<Table
					header={{
						title: 'Listado Slides',
						button: () => (
							<Link to="/backoffice/slides/create">
								<button className="btnAddTable">Crear Slide</button>
							</Link>
						),
					}}
					fields={['Titulo', 'Imagen', 'Order', 'Acciones']}
					scopedSlots={{
						title: ({ name }) => <td>{name}</td>,
						image: ({ image, name }) => (
							<td>
								<img src={image} alt={name + ' foto'} />
							</td>
						),
						order: ({ order }) => (
							<td>
								<h1>{order}</h1>
							</td>
						),
						actions: ({ id }) => (
							<td>
								<Link to="/backoffice/slides/edit">
									<button className="btnUpdateTable">Editar</button>
								</Link>
								<button
									className="btnDeleteTable"
									onClick={() => handleClickDelete(id)}
								>
									Eliminar
								</button>
							</td>
						),
					}}
					data={slidesData}
				/>
			</div>
		</BackOfficeLayout>
	)
}
