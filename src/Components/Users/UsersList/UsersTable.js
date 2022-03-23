import React from 'react'

const UsersTable = ({ users }) => {
	return (
		<div className="table-container-responsive">
			<table className="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Rol</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								{(user.role_id === 1 && 'Administrador') ||
									(user.role_id === 2 && 'Usuario Regular')}
							</td>
							<td className="actions">
								<button className="btnUpdateTable">Editar</button>
								<button className="btnDeleteTable">Eliminar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UsersTable
