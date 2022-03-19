import { getRequest } from '../../../Services/publicApiService'
import { Navigate } from 'react-router'
import { isLogin } from './UserNotLogged'

const getUsers = async () => {
	try {
		const response = await getRequest('/users')
		return response.data.data
	} catch (error) {
		console.log(error)
	}
}

function getRole() {
	getUsers().then((response) => {
		const user = response.filter((user) => {
			return user.email === localStorage.getItem('email')
		})

		if (user) {
			localStorage.setItem('role', user[0].role_id)
		}
	})
}

export default function userIsAdmin(Componente) {
	if (isLogin() && !localStorage.getItem('role')) {
		getRole()
	}

	if (localStorage.getItem('role') === '1') {
		return <Componente />
	} else {
		return <Navigate to="/" />
	}
}
