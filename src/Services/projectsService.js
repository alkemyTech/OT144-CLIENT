import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'
const endpointProjects = process.env.REACT_APP_URL_PROJECTS

export const getProjects = async () => {
	return await getRequest(endpointProjects)
}

export const getProjectsById = async (id) => {
	return await getRequest(endpointProjects, id)
}

export const postProjects = async (bodyData) => {
	return await postRequest(endpointProjects, bodyData)
}

export const deleteProjects = async (id) => {
	return await deleteRequest(endpointProjects, id)
}

export const updateProjects = async (id, bodyData) => {
	return await putRequest(endpointProjects, id, bodyData)
}
