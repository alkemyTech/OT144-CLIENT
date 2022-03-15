import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'

const endpoint = process.env.REACT_APP_API_ACTIVITIES

export const getActivities = async () => {
	return await getRequest(endpoint)
}

export const getActivitiesId = async (id) => {
	return await getRequest(endpoint, id)
}

export const postActivities = async (bodyData) => {
	return await postRequest(endpoint, bodyData)
}

export const deleteActivities = async (id) => {
	return await deleteRequest(endpoint, id)
}

export const updateActivities = async (id, bodyData) => {
	return await putRequest(endpoint, id, bodyData)
}
