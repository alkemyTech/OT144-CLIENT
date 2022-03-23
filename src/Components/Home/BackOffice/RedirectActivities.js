import BackOfficeLayout from '../../Layout/BackOfficeLayout'
import { useParams } from 'react-router'
import ActivitiesForm from '../../Activities/ActivitiesForm/ActivitiesForm'
import ActivitiesList from './ActivitiesList'
import { getActivitiesId } from '../../../Services/activitiesService'
import { useEffect, useState } from 'react'

const RedirectActivities = () => {
	const { action, id } = useParams()
	const [activity, setActivity] = useState({})

	useEffect(async () => {
		if (id) {
			const response = await getActivitiesId(id)
			setActivity(response.data.data)
		}
	}, [])

	console.log(activity)
	const show = (param) => {
		switch (param) {
		case 'create':
			return (
				<BackOfficeLayout>
					<ActivitiesForm mode="create" />
				</BackOfficeLayout>
			)
		case 'edit':
			return (
				<BackOfficeLayout>
					<ActivitiesForm activity={activity} mode="edit" />
				</BackOfficeLayout>
			)
		default:
			return (
				<BackOfficeLayout>
					<ActivitiesList />
				</BackOfficeLayout>
			)
		}
	}
	return show(action)
}
export default RedirectActivities
