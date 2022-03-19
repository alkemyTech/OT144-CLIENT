import React, { useEffect } from 'react'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'
import UsersTable from './UsersTable'
import './UsersList.css'
import '../../TableStyles.css'
import { Link } from 'react-router-dom'
import { getUsers } from '../../../Services/userService'
const UsersList = () => {
	const [users, setUsers] = React.useState([])

	useEffect(() => {
		const initializeUsers = async () => {
			try {
				const users = await getUsers()
				setUsers(users.data)
			} catch (error) {
				console.log(error)
			}
		}

		initializeUsers()
	}, [])

	return (
		<BackOfficeLayout>
			<main className="users-list-container">
				<h1 className="headerTxt">Lista de Usuarios</h1>
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
