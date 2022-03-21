import React, { useEffect, useState } from 'react'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'
import UsersTable from './UsersTable'
import './UsersList.css'
import '../../TableStyles.css'
import { Link } from 'react-router-dom'
import { getUserByName, getUsers } from '../../../Services/userService'
import { getUsersAction } from '../../../actions/actions'
import { store } from '../../../app/store'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'

const UsersList = () => {
	const [users, setUsers] = React.useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [search, setSearch] = useState('')

	function getAllUsers() {
		const initializeUsers = async () => {
			try {
				const response = await getUsers()
				store.dispatch(getUsersAction(response.data))
				setUsers(store.getState().users.users)
				setLoading(false)
			} catch (error) {
				setError(error)
			}
		}

		initializeUsers()
	}

	useEffect(() => {
		getAllUsers()
	}, [])

	useEffect(() => {
		if (search.length >= 2) {
			try {
				;(async () => {
					const response = await getUserByName(search)
					store.dispatch(getUsersAction(response.data))
					setUsers(store.getState().users.users.data)
					setLoading(false)
				})()
			} catch (error) {
				setError(true)
			}
		} else {
			getAllUsers()
		}
	}, [search])

	function handleChange(event) {
		setSearch(event.target.value)
	}

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<BackOfficeLayout>
			<main className="users-list-container">
				<h1 className="headerTxt">Lista de Usuarios</h1>
				<div className="containerInputSearch">
					<input
						name="users-search"
						type="search"
						value={search}
						onChange={handleChange}
						className="input-field search"
						placeholder="Buscar usuarios"
					/>
				</div>
				<div className="main-action">
					<Link to="/backoffice/users/create" className="btnAddTable">
						Crear nuevo usuario
					</Link>
				</div>
				<UsersTable users={users} />
			</main>
		</BackOfficeLayout>
	)
}

export default UsersList
