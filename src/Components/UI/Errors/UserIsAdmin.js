import { getRequest } from '../../../Services/publicApiService'

const getUsers = async () => {
	try {
		const response = await getRequest('/users')
		return response.data
	} catch (error) {
		console.log(error)
	}
}

function getRole() {
	getUsers().then((response) => {
		const user = response.filter((user) => {
			return user.email === localStorage.getItem('email')
		})
		localStorage.setItem('role', user[0].role_id)
	})
}

export default function userIsAdmin() {
	getRole()
	return localStorage.getItem('role') === 1
}
