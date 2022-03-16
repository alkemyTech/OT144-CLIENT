import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'

const endPoint = process.env.REACT_APP_URL_ACTIVITIES

export const getActivities = async () => {
	return await getRequest(endPoint)
}

export const getActivitiesId = async (id) => {
	return await getRequest(endPoint, id)
}

export const postActivities = async (data) => {
	return await postRequest(endPoint, data)
}

export const deleteActivities = async (id) => {
	return await deleteRequest(endPoint, id)
}

export const updateActivities = async (id, data) => {
	return await putRequest(endPoint, id, data)
}
