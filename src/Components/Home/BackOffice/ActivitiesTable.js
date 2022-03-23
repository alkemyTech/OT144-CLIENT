import React, { useState, useEffect } from 'react'
import '../../TableStyles.css'
import SearchActivities from './SearchActivities'
import { useDispatch, useSelector } from 'react-redux'
import { startGetActivities } from '../../../../src/actions/Activities'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import BasicAlert from '../../UI/Alerts/BasicAlert'
import { Link } from 'react-router-dom'

const ActivitiesTable = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [inputSearch, setInputSearch] = useState('')
	const { activities } = useSelector((store) => store.activities)
	const dispatch = useDispatch()
	const handleClickUpdate = () => {}
	const handleClickDelete = () => {}

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
		<>
			<div className="table-container-responsive">
				<div className="main-action">
					<Link to="/backoffice/activities/create" className="btnAddTable">
						Crear nueva actividad
					</Link>
					<SearchActivities
						inputSearch={inputSearch}
						setInputSearch={setInputSearch}
					/>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Imagen</th>
							<th>Creado</th>
							<th>Acciones</th>
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
								<td className="actions">
									<button
										className="btnUpdateTable"
										onClick={handleClickUpdate}
									>
										Editar
									</button>
									<button
										className="btnDeleteTable"
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
		</>
	)
}

export default ActivitiesTable
