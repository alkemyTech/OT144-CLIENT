import { getRequest, postRequest } from './privateApiService'
import { putRequest } from './publicApiService'

const endpoint = process.env.REACT_APP_URL_ORGANIZATION

export const getAllOrganizationData = async () => {
	return await getRequest(endpoint)
}

export const getOrganizationData = async (id) => {
	return await getRequest(endpoint, id)
}

export const createOrganizationData = async (data) => {
	return await postRequest(endpoint, data)
}

export const updateOrganizationData = async (data) => {
	return await putRequest(endpoint, data.id, data)
}
