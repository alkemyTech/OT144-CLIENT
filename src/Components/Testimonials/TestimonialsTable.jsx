import React, { useState, useEffect } from 'react'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import { store } from '../../app/store'
import { getTestimonials } from '../../Services/TestimonialsApiService'
import '../UI/Table/table.css'
import { getTestimonialsAction } from '../../actions/actions'
import { Link } from 'react-router-dom'

const TestimonialsList = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		; (async () => {
			setLoading(true)
			try {
				const response = await getTestimonials()
				store.dispatch(getTestimonialsAction(response.data.data))
				setData(response.data.data)
			} catch (e) {
				setError(e.message)
			}
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return (
			<BackOfficeLayout>
				<div className="spinner-container">
					<SpinnerComponent loading={true} />
				</div>
			</BackOfficeLayout>
		)
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<BackOfficeLayout>
			<section className="sectionTable">
				<div className="table-container-responsive">
					<h1 className="headerTxt">Testimonios</h1>
					<table className="table">
						<thead>
							<tr>
								<td>
									<Link
										to="/backoffice/activities/create"
										className="btnAddTable"
									>
										Crear nuevo testimonio
									</Link>
								</td>
							</tr>
							<tr>
								<th>Nombre</th>
								<th>Imagen</th>
								<th>Creado</th>
								<th colSpan="2">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{data.map((activity) => (
								<tr key={activity.id}>
									<td>{activity.name}</td>
									<td>
										<img src={activity.image} alt={activity.name} />
									</td>
									<td>{activity.created_at}</td>
									<td>

										<button className="btnUpdateTable">Editar</button>

									</td>
									<td>
										<button
											className="btnDeleteTable"
											id={activity.id}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</BackOfficeLayout>
	)
}

export default TestimonialsList