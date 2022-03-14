import React from 'react'
import '../CardListStyles.css'

const NewsList = () => {
	const newsMock = [
		{
			id: 2,
			name: 'Titulo de prueba 2',
			description: 'Descripcion de prueba 2',
		},
		{
			id: 1,
			name: 'Titulo de prueba 1',
			description: 'Descripcion de prueba 1',
		},
		{
			id: 3,
			name: 'Titulo de prueba 3',
			description: 'Descripcion de prueba 3',
		},
	]

	return (
		<div>
			<h1>Listado de Novedades</h1>
			<ul className="list-container">
				{newsMock.length > 0 ? (
					newsMock.map((element) => {
						return (
							<li className="card-info" key={element.id}>
								<h3>{element.name}</h3>
								<p>{element.description}</p>
							</li>
						)
					})
				) : (
					<p>No hay novedades</p>
				)}
			</ul>
		</div>
	)
}

export default NewsList
