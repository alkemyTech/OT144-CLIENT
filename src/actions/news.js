import { getNews } from '../Services/NewsApiServices'
import { setNewsAction } from './actions'

export const startGetNews =
	(search = '') =>
		async (dispatch) => {
			const response = await getNews(search)
			dispatch(setNewsAction(response.data.data))
		}
