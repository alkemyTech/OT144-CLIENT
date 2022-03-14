import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../TableStyles.css'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import BasicAlert from '../../UI/Alerts/BasicAlert'
import { store } from '../../../app/store'
import {
	getNews,
	postNews,
	updateNews,
	deleteNews,
} from '../../../Services/NewsApiServices'
import {
	setNewsAction,
	addNewsAction,
	updateNewsAction,
	deleteNewsAction,
} from '../../../actions/actions'

function Novedades() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [dataNews, setDataNews] = useState([])

	useEffect(() => {
		try {
			;(async () => {
				const response = await getNews()
				store.dispatch(setNewsAction(response.data))
				setDataNews(store.getState().news.news.data)
				setLoading(false)
			})()
		} catch (error) {
			setError(true)
		}
	}, [])

	useEffect(() => {
		try {
			;(async () => {
				const response = await getNews()
				store.dispatch(setNewsAction(response.data.data))
				setDataNews(store.getState().news.news)
			})()
		} catch (error) {
			// Alert setNews failed
		}
	}, [])

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <BasicAlert />
	}

	const fetchAddNews = (bodyNews) => {
		try {
			;(async () => {
				const response = await postNews(bodyNews)
				store.dispatch(addNewsAction(response.data.data))
				setDataNews(store.getState().news)
			})()
		} catch (error) {
			setError(true)
		}
	}

	// Utilizar en la pagina de crear novedad
	const fetchUpdateNews = (bodyNews) => {
		try {
			;(async () => {
				await updateNews(bodyNews.id, bodyNews)
				store.dispatch(updateNewsAction(bodyNews))
				setDataNews(store.getState().news.news)
			})()
		} catch (error) {
			setError(true)
		}
	}

	const fetchDeleteNews = (id) => {
		try {
			;(async () => {
				await deleteNews(id)
				store.dispatch(deleteNewsAction(id))
				setDataNews(store.getState().news.news)
			})()
		} catch (error) {
			setError(true)
		}
	}

	const body = {
		name: 'pruebaUpdate',
	} /* REEMPLAZAR POR LA INFORMACION QUE VENGA DE LA PANTALLA DE EDITAR */

	const handleClickUpdate = (body, event) => {
		fetchUpdateNews({ id: parseInt(event.target.id), ...body })
	}

	const handleClickDelete = (event) => {
		fetchDeleteNews(parseInt(event.target.id))
	}

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <BasicAlert />
	}

	return (
		<section className="sectionTable">
			<div className="table-container-responsive">
				<table className="table">
					<thead>
						<tr>
							<td>
								<Link
									to="/backoffice/news/create"
									onClick={fetchAddNews}
									className="btnAddTable"
								>
									Crear
								</Link>
							</td>
						</tr>
						<tr>
							<th>Nombre</th>
							<th>Imagen</th>
							<th>Creado</th>
							<th colSpan="2">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{dataNews.length > 0
							? dataNews.map((news) => {
								return (
									<tr key={news.id}>
										<td>{news.name}</td>
										<td>
											<img src={news.image}></img>
										</td>
										<td>{news.created_at}</td>
										<td>
											<button
												id={news.id}
												className="btnUpdateTable"
												onClick={(event) => handleClickUpdate(body, event)}
											>
													Editar
											</button>
										</td>
										<td>
											<button
												id={news.id}
												className="btnDeleteTable"
												onClick={handleClickDelete}
											>
													Eliminar
											</button>
										</td>
									</tr>
								)
							  })
							: null}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default Novedades
