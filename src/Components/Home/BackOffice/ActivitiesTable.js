import '../../TableStyles.css'

const ActivitiesTable = ({ activities }) => {
	const handleClickUpdate = () => {}
	const handleClickDelete = () => {}

	return (
		<div className="table-container-responsive">
			<table className="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Imagen</th>
						<th>Creado</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{activities.map((activity) => (
						<tr key={activity.id}>
							<td>{activity.name}</td>
							<td>
								<img src={activity.image} alt={activity.name} />
							</td>
							<td>{activity.created_at}</td>
							<td className="actions">
								<button className="btnUpdateTable" onClick={handleClickUpdate}>
									Editar
								</button>
								<button className="btnDeleteTable" onClick={handleClickDelete}>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ActivitiesTable
