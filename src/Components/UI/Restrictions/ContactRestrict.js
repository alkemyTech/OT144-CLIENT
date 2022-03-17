import React from 'react'
import { getUser } from '../../../Services/userService'

export const ContactRestrict = () => {
	const [user, setUser] = React.useState({})
	// eslint-disable-next-line no-unused-vars
	const [error, setError] = React.useState(null)

	React.useEffect(() => {
		const getUserData = async () => {
			try {
				const user = await getUser()
				setUser(user)
			} catch (error) {
				setError(error)
			}
		}
		getUserData()
	}, [])

	// eslint-disable-next-line sonarjs/prefer-single-boolean-return
	if (user.role_id === 0) {
		return true
	} else {
		return false
	}
}
