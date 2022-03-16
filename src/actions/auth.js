import axios from 'axios'
import { baseURL } from '../Services/Api'
import { login, logout, register } from './actions'

export const startLogin = (email, password) => async (dispatch) => {
	const response = await axios.post(`${baseURL}login`, { email, password })
	if (response.status === 200) {
		dispatch(
			login({
				token: response.data.data.token,
				user: response.data.data.user,
			})
		)
		localStorage.setItem('token', response.data.data.token)
	} else {
		// TODO: Alert login failed
	}
}

export const startRegister = (name, email, password) => async (dispatch) => {
	const response = await axios.post(`${baseURL}register`, {
		name,
		email,
		password,
	})
	if (response.status === 200) {
		dispatch(
			register({
				token: response.data.data.token,
				user: response.data.data.user,
			})
		)
		localStorage.setItem('token', response.data.data.token)
	} else {
		// TODO: Alert register failed
	}
}

export const startLogout = () => (dispatch) => {
	localStorage.removeItem('token')
	dispatch(logout())
}
