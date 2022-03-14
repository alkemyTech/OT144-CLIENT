import {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest,
} from '../../Services/publicApiService'
const endpoint = process.env.REACT_APP_API_TESTIMONIALS

export const getTestimonials = async () => {
	return await getRequest(endpoint)
}

export const createTestimonials = async (data) => {
	return await postRequest(endpoint, data)
}

export const getTestimonial = async (id) => {
	return await getRequest(endpoint, id)
}

export const updateTestimonial = async (id, data) => {
	return await putRequest(endpoint, id, data)
}

export const deleteTestimonial = async (id) => {
	return await deleteRequest(endpoint, id)
}
