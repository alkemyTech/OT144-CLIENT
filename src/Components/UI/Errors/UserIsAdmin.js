import { getRequest } from '../../../Services/publicApiService'
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

	return localStorage.getItem('role') === '1'
}
