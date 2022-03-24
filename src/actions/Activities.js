import { setActivitiesAction } from './actions'
import { getActividades } from '../Services/ServiceAPIActividades'

export const startGetActivities =
	(search = '') =>
		async (dispatch) => {
			const response = await getActividades(search)
			dispatch(setActivitiesAction(response.data.data))
		}
