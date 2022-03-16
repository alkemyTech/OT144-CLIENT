import React from 'react'
import { getUser } from '../../../Services/userService'

export const ContactRestrict = () => {
	const [user, setUser] = React.useState({})
	const [, setError] = React.useState(null)

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
	// eslint-disable-next-line
	if (user.role_id === 0) {
		return true
	} else {
		return false
	}
}
