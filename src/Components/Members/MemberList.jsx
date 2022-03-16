import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import { store } from '../../app/store'
import { getAllMembers } from '../../Services/membersService'
import { getMemberActions } from '../../actions/memberActions'
import '../TableStyles.css'
import './MemberList.css'

const MemberList = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		; (async () => {
			setLoading(true)
			try {
				const response = await getAllMembers()
				store.dispatch(getMemberActions(response.data.data))
				setData(response.data.data)
			} catch (e) {
				setError(e.message)
			}
			setLoading(false)
		})()
	}, [])

	const handleClickUpdate = () => { }

	const handleClickDelete = () => { }

	if (loading) {
		return (
			<div className="spinner-container">
				<SpinnerComponent loading={true} />
			</div>
		)
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<section className="sectionTable">
			<table className="table">
				<thead>
					<tr>
						<td>
							<h1 className="title">Listado de Miembros</h1>
						</td>
						<td>
							<button
								className="btnAddTable"
								onClick={() => {
									; <Link to="/backoffice/members/create">Nuevo Miembro</Link>
								}}
							>
								Nuevo Miembro
							</button>
						</td>
					</tr>
					<tr>
						<th>Nombre</th>
						<th>Foto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((member) => (
							<tr className="card-container" key={member.id}>
								<td>{member.name}</td>
								<td>
									<img src={member.image} alt={member.name} />
								</td>
								<td>
									<button
										className="btnUpdateTable"
										onClick={() => handleClickUpdate()}
									>
										Edit
									</button>
									<button
										className="btnDeleteTable"
										onClick={() => handleClickDelete()}
									>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<p> No hay miembros</p>
					)}
				</tbody>
			</table>
		</section>
	)
}

export default MemberList
