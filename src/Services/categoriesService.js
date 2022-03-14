import {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest,
} from './publicApiService'
const endPoint = process.env.REACT_APP_URL_CATEGORIES

export const getCategories = async () => {
	return await getRequest(endPoint)
}

export const createCategories = async (data) => {
	return await postRequest(endPoint, data)
}

export const getCategory = async (id) => {
	return await getRequest(endPoint, id)
}

export const updateCategory = async (id, data) => {
	return await putRequest(endPoint, id, data)
}

export const deleteCategory = async (id) => {
	return await deleteRequest(endPoint, id)
}
