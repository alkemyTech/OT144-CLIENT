import axios from 'axios'
import { baseURL } from './Api'

export const getRequest = async (url, id = null) => {
	const endpoint = !id ? `${baseURL}${url}` : `${baseURL}${url}/${id}`
	try {
		return await axios.get(endpoint)
	} catch (e) {
		alert('Error al traer la data')
	}
}

export const postRequest = async (url, body) => {
	try {
		return await axios.post(`${baseURL}${url}`, body)
	} catch (e) {
		alert('Error al enviar la información!')
	}
}

export const putRequest = async (url, body) => {
	try {
		return await axios.put(`${baseURL}${url}`, body)
	} catch (e) {
		alert('Error al actualizar la información!')
	}
}
