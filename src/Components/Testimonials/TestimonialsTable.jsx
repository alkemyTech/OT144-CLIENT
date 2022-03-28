import React, { useState, useEffect } from 'react'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import { store } from '../../app/store'
import { deleteTestimonial, getTestimonials } from '../../Services/TestimonialsApiService'
import '../UI/Table/table.css'
import { deleteTestimonialAction, getTestimonialsAction } from '../../actions/actions'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TestimonialsList = () => {
	const [loading, setLoading] = useState(false)

	const [error, setError] = useState(null)
	const { testimonials } = useSelector((store) => store.testimonials)

	useEffect(() => {
		; (async () => {
			setLoading(true)
			try {
				const response = await getTestimonials()
				store.dispatch(getTestimonialsAction(response.data.data))
			
			} catch (e) {
				setError(e.message)
			}
			setLoading(false)
		})()
	}, [])

	const fetchDeleteTestimonial = (id) => {
		try {
			;(async () => {
				await deleteTestimonial(id)
				store.dispatch(deleteTestimonialAction(id))
				window.location.reload()
			})()
		} catch (error) {
			setError(true)
		}
	}

	const handleClickDelete = (event) => {
		fetchDeleteTestimonial(parseInt(event.target.id))
	}

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
							{testimonials?.map((activity) => (
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
											onClick={handleClickDelete}
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