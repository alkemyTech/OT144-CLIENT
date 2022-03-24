import { useState, useEffect } from 'react'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'
import { useHistory } from 'react-router-dom'
import './Categories.css'
import '../../UI/Table/table.css'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import {
	getCategories,
	deleteCategory,
} from '../../../Services/categoriesService'

export default function Categories() {
	const history = useHistory()

	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const initializeCategories = async () => {
			try {
				const response = await getCategories()
				setCategories(response.data)
				setLoading(false)
			} catch (error) {
				setError(true)
			}
		}
		initializeCategories()
	}, [])

	const handleClickDelete = async (id) => {
		try {
			await deleteCategory(id)
			setCategories(categories.filter((category) => category.id !== id))
		} catch (error) {
			setError(true)
		}
	}

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<BackOfficeLayout>
			<section className="sectionTable">
				<div className="table-container-responsive">
					<h1 className="headerTxt">Categorias</h1>
					<table className="table">
						<thead>
							<tr>
								<td>
									<button
										onClick={() =>
											history.push('/backoffice/create-categories', [{}])
										}
										className="btnAddTable"
									>
										Crear
									</button>
								</td>
							</tr>
							<tr>
								<th>Nombre</th>
								<th>Creado</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{categories.map((category) => {
								return (
									<tr key={category.id}>
										<td>{category.name}</td>
										<td>{category.created_at}</td>
										<td>
											<button
												className="btnUpdateTable"
												type="button"
												onClick={() =>
													history.push(`/backoffice/create-categories`, [
														{ category },
													])
												}
											>
												Editar
											</button>
											<button
												className="btnDeleteTable"
												type="button"
												onClick={() => handleClickDelete(category.id)}
											>
												Eliminar
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</section>
		</BackOfficeLayout>
	)
}
