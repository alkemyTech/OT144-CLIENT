import { useState, useEffect } from 'react'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ActivitiesTable from './ActivitiesTable'
import { getActivities } from '../../../Services/activitiesService'
import '../../TableStyles.css'
import './ActivitiesList.css'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'
import { store } from '../../../app/store'
import { setActivitiesAction } from '../../../actions/actions'

const ActivitiesList = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await getActivities()
				store.dispatch(setActivitiesAction(response.data.data))
				setData(store.getState().activities.activities)
				setLoading(false)
			} catch (e) {
				setError('No disponible')
			}
		})()
	}, [])

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<main>
			<BackOfficeLayout>
				<div className="containerActivities">
					<h1 className="headerTxt">Lista de Actividades</h1>
					<ActivitiesTable activities={data} setData={setData} />
				</div>
			</BackOfficeLayout>
		</main>
	)
}

export default ActivitiesList
