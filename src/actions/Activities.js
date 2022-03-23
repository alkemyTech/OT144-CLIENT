import { setActivitiesAction } from './actions'
import { getActividades } from '../Services/ServiceAPIActividades'

export const startGetActivities =
	(search = '') =>
		async (dispatch) => {
			const response = await getActividades(search)
			console.log(response)
			dispatch(setActivitiesAction(response.data.data))
		}
