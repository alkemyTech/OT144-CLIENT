import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'
const endpointNews = process.env.REACT_APP_URL_NEWS

export const getNews = async (search = '') => {
	const endpoint =
		search === '' ? endpointNews : `${endpointNews}?search=${search}`
	return await getRequest(endpoint)
}

export const getNewsById = async (id) => {
	return await getRequest(endpointNews, id)
}

export const getNewsByTitle = async (search) => {
	return await getRequest(`${endpointNews}?search=${search}`)
}

export const postNews = async (bodyData) => {
	return await postRequest(endpointNews, bodyData)
}

export const deleteNews = async (id) => {
	return await deleteRequest(endpointNews, id)
}

export const updateNews = async (id, bodyData) => {
	return await putRequest(endpointNews, id, bodyData)
}
