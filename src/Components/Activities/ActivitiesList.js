import React from 'react'
import '../UI/Card/CardListStyles.css'

const ActivitiesList = () => {
	const activitiesMock = [
		{
			id: 2,
			name: 'Titulo de prueba 1',
			description: 'Descripcion de prueba 1',
		},
		{
			id: 1,
			name: 'Titulo de prueba 2',
			description: 'Descripcion de prueba 2',
		},
		{
			id: 3,
			name: 'Titulo de prueba 3',
			description: 'Descripcion de prueba 3',
		},
	]

	return (
		<div>
			<h1>Listado Actividades</h1>
			<ul className="list-container">
				{activitiesMock.length > 0 ? (
					activitiesMock.map((activity) => {
						return (
							<li className="card-info" key={activity.id}>
								<h3>{activity.name}</h3>
								<p>{activity.description}</p>
							</li>
						)
					})
				) : (
					<p>No hay actividades</p>
				)}
			</ul>
		</div>
	)
}

export default ActivitiesList
