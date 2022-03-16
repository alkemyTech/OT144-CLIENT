import { useState, useEffect } from 'react'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ActivitiesTable from './ActivitiesTable'
import { Link } from 'react-router-dom'
import { getActivities } from '../../../Services/activitiesService'
import '../../TableStyles.css'
import './ActivitiesList.css'

const ActivitiesList = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await getActivities()
				setData(response.data.data)
			} catch (e) {
				return <ErrorAlert />
			}
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return <SpinnerComponent loading={true} />
	}

	return (
		<main>
			<h1 className="headerTxt">Lista de Actividades</h1>
			<div className="main-action">
				<Link to="/backoffice/activities/create" className="btnAddTable">
					Crear nueva actividad
				</Link>
			</div>
			<ActivitiesTable activities={data} />
		</main>
	)
}

export default ActivitiesList
