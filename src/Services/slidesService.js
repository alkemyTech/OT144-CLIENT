import {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest,
} from './privateApiService'

export const getSlides = async () => {
	return await getRequest(`${process.env.REACT_APP_URL_SLIDES}`)
}

export const getSlide = async (id) => {
	return await getRequest(`${process.env.REACT_APP_URL_SLIDES}`, id)
}

export const createSlide = async (data) => {
	return await postRequest(`${process.env.REACT_APP_URL_SLIDES}`, data)
}

export const updateSlide = async (id, data) => {
	return await putRequest(`${process.env.REACT_APP_URL_SLIDES}`, id, data)
}

export const deleteSlide = async (id) => {
	return await deleteRequest(`${process.env.REACT_APP_URL_SLIDES}`, id)
}
