import { getRequest, postRequest, putRequest } from './publicApiService'
import { deleteRequest } from './privateApiService'

const endpoint = process.env.REACT_APP_URL_TESTIMONIALS

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
