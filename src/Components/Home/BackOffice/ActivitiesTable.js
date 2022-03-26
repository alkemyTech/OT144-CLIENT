import React, { useState, useEffect } from 'react'
import { store } from '../../../app/store'
import { deleteActivities } from '../../../Services/activitiesService'
import { deleteActivitiesAction } from '../../../actions/actions'
import { Link } from 'react-router-dom'
import '../../../Components/UI/Table/table.css'
import SearchActivities from './SearchActivities'
import { useDispatch, useSelector } from 'react-redux'
import { startGetActivities } from '../../../../src/actions/Activities'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ConfirmAlert from '../../UI/Alerts/ConfirmAlert'
import BasicAlert from '../../UI/Alerts/BasicAlert'

const ActivitiesTable = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [inputSearch, setInputSearch] = useState('')
	const { activities } = useSelector((store) => store.activities)
	const dispatch = useDispatch()

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

	const fetchDeleteActivity = (id) => {
		try {
			;(async () => {
				await deleteActivities(id)
				store.dispatch(deleteActivitiesAction(id))
			})()
		} catch (error) {
			setError(true)
		}
	}

	const handleClickDelete = async (event) => {
		const result = await ConfirmAlert({
			type: 'warning',
			title: '¿Está seguro?',
			text: 'Esta acción es irreversible',
		})
		if (result.isConfirmed) {
			fetchDeleteActivity(parseInt(event.target.id))
			BasicAlert({ type: 'success', title: 'OK', text: 'Actividad eliminada' })
		}
	}

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
							<td colSpan="2">
								<SearchActivities
									inputSearch={inputSearch}
									setInputSearch={setInputSearch}
								/>
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
