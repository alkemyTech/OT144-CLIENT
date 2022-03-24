import {
	getRequest,
	deleteRequest,
	putRequest,
	postRequest,
} from './privateApiService'
const endpoint = '/users'

export const getUsers = async () => {
	const response = await getRequest(endpoint)
	return response.data
}

export const getUser = async (id) => {
	const response = await getRequest(endpoint, id)
	return response.data
}

export const getUserByName = async (search) => {
	return await getRequest(`${endpoint}?search=${search}`)
}

export const getUserByRole = async (search, role) => {
	return await getRequest(`${endpoint}?search=${search}&role=${role}`)
}

export const createUser = async (user) => {
	const response = await postRequest(endpoint, user)
	return response.data
}

export const updateUser = async (id, user) => {
	const response = await putRequest(endpoint, id, user)
	return response.data
}

export const deleteUser = async (id) => {
	const response = await deleteRequest(endpoint, id)
	return response.data
}
