import React, { useState, useEffect } from 'react'
import TitleComponent from '../title/TitleComponent'
import ActivitiesList from './ActivitiesList'
import { store } from '../../app/store'
import { getActivities } from '../../Services/ActivityApiService'

const Actividades = () => {
	const [, setDataActivities] = useState({})
	const [, setError] = useState(false)

	useEffect(() => {
		try {
			;(async () => {
				const response = await getActivities()
				store.dispatch(setDataActivities(response.data))
			})()
		} catch (error) {
			setError(true)
		}
	}, [])

	return (
		<div>
			<TitleComponent title="actividades" />
			<ActivitiesList />
		</div>
	)
}

export default Actividades
