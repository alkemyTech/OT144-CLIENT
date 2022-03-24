import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'
const endPoint = process.env.REACT_APP_URL_ACTIVITIES

export const getActividades = async (search = '') => {
	const endpointSearch =
		search === '' ? endPoint : `${endPoint}?search=${search}`
	return await getRequest(endpointSearch)
}

export const getActividadesId = async (id) => {
	return await getRequest(endPoint, id)
}

export const postActividades = async (data) => {
	return await postRequest(endPoint, data)
}

export const deleteActividades = async (id) => {
	return await deleteRequest(endPoint, id)
}

export const updateActividades = async (id, data) => {
	return await putRequest(endPoint, id, data)
}
