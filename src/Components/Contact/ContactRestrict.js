import React, { useEffect, useState } from 'react'
import { getUser } from '../../Services/userService'
import ErrorAlert from '../UI/Alerts/ErrorAlert'

export const contactRestrict = () => {
	const [user, setUser] = useState([])

	useEffect(async () => {
		try {
			const response = await getUser()
			setUser(response.data.data)
		} catch (e) {
			return <ErrorAlert />
		}
	}, [])

	if (user?.role_id === 1) {
		return true
	}
	if (user?.role_id === 0) {
		return false
	}
}
