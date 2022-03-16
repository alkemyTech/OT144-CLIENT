import axios from 'axios'
import { baseURL } from './Api'

const config = {
	headers: {
		Group: 144,
	},
}

export const getRequest = async (url, id = null) => {
	const endpoint = !id ? `${baseURL}${url}` : `${baseURL}${url}/${id}`
	try {
		return await axios.get(endpoint, { ...config.headers })
	} catch (e) {
		console.log(e)
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

export const deleteRequest = async (url, id) => {
	try {
		const response = await axios({
			method: 'delete',
			url: `${baseURL}${url}/${id}`,
			headers: {
				...config.headers,
			},
		})

		return {
			status: response.status,
			data: response.data,
		}
	} catch (error) {
		return {
			status: error.response.status,
			error: error.message,
			data: error.response.data,
		}
	}
}
