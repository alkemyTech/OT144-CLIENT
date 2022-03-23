import React, { useState, useEffect } from 'react'
import '../../TableStyles.css'
import { store } from '../../../app/store'
import { deleteActivities } from '../../../Services/activitiesService'
import { deleteActivitiesAction } from '../../../actions/actions'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ActivitiesTable = ({ activities, setData }) => {
	const [, setError] = useState(false)

	const fetchDeleteActivity = (id) => {
		try {
			;(async () => {
				await deleteActivities(id)
				store.dispatch(deleteActivitiesAction(id))
				setData(store.getState().activities.activities)
			})()
		} catch (error) {
			setError(true)
		}
	}
	console.log(store.getState())

	const handleClickDelete = (event) => {
		fetchDeleteActivity(parseInt(event.target.id))
	}

	useEffect(() => {
		try {
			if (inputSearch.length < 3) {
				dispatch(startGetActivities())
			} else {
				dispatch(startGetActivities(inputSearch))
			}
			setLoading(false)
		} catch (error) {
			setError(true)
		}
	}, [inputSearch])

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <BasicAlert />
	}

	return (
		<section className="sectionTable">
			<div className="table-container-responsive">
				<table className="table">
					<thead>
						<tr>
							<td>
								<Link
									to="/backoffice/activities/create"
									className="btnAddTable"
								>
									Crear nueva actividad
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
						{activities.map((activity) => (
							<tr key={activity.id}>
								<td>{activity.name}</td>
								<td>
									<img src={activity.image} alt={activity.name} />
								</td>
								<td>{activity.created_at}</td>
								<td>
									<Link to={`/backoffice/activities/edit/${activity.id}`}>
										<button className="btnUpdateTable">Editar</button>
									</Link>
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
	)
}

export default ActivitiesTable
