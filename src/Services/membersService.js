import {
	getRequest,
	postRequest,
	deleteRequest,
	putRequest,
} from './privateApiService'

export const getAllMembers = async () => {
	const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`
	return await getRequest(endPoint)
}

export const getMember = async (id) => {
	const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`
	return await getRequest(endPoint, id)
}

export const createMember = async (data) => {
	const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`
	return await postRequest(endPoint, data)
}

export const updateMember = async (id, body) => {
	const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`
	return await putRequest(endPoint, id, body)
}

export const deleteMember = async (id) => {
	const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`
	return await deleteRequest(endPoint, id)
}
