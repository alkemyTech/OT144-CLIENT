import React, { useState, useEffect } from 'react'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import { Link } from 'react-router-dom'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import { store } from '../../app/store'
import { deleteMember, getAllMembers } from '../../Services/membersService'
import { deleteMemberActions, getMemberActions } from '../../actions/memberActions'
import '../UI/Table/table.css'
import './MemberList.css'
import ConfirmAlert from '../UI/Alerts/ConfirmAlert'
import BasicAlert from '../UI/Alerts/BasicAlert'
import { useSelector } from 'react-redux'

const MemberList = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	const { members } = useSelector((state) => state.members)

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

	console.log(data);

	const fetchDeleteMember = (id) => {
		try {
			;(async () => {
				await deleteMember(id)
				store.dispatch(deleteMemberActions(id))
				
			})()
		} catch (error) {
			setError(true)
		}
	}

	const handleClickDelete = async (event) => {
		const result = await ConfirmAlert({
			type: 'warning',
			title: '¿Está seguro?',
			text: 'Esta acción es irreversible',
		})
		if (result.isConfirmed) {
			fetchDeleteMember(parseInt(event.target.id))
			BasicAlert({ type: 'success', title: 'OK', text: 'Actividad eliminada' })
			setTimeout(() => {
				window.location.reload()
			}, 1500);
		}
	}

	if (loading) {
		return (
			<BackOfficeLayout>
				<div className="spinner-container">
					<SpinnerComponent loading={true} />
				</div>
			</BackOfficeLayout>
		)
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<BackOfficeLayout>
			<section className="sectionTable">
				<div className="table-container-responsive">
					<h1 className="headerTxt">Listado de Miembros</h1>
					<table className="table">
						<thead>
							<tr>
								<td>
									<Link
										to="/backoffice/members/create"
										className="btnAddTable"
									>
										Crear nuevo miembro
									</Link>
								</td>
							</tr>
							<tr>
								<th>Nombre</th>
								<th>Foto</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{members.length > 0 ? (
								members?.map((member) => (
									<tr key={member.id}>
										<td>{member.name}</td>
										<td>
											<img src={member.image} alt={member.name} />
										</td>
										<td>
											<Link to={`/backoffice/members/edit/${member.id}`}>
												<button className="btnUpdateTable">Editar</button>
											</Link>
											<button
												className="btnDeleteTable"
												id={member.id}
												onClick={handleClickDelete}
											>
												Eliminar
											</button>
										</td>
									</tr>
								))
							) : (
								<p> No hay miembros</p>
							)}
						</tbody>
					</table>
				</div>
			</section>
		</BackOfficeLayout>
	)
}

export default MemberList
