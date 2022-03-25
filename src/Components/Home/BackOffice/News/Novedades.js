import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../UI/Table/table.css'
import './NewsBackoffice.css'
import SpinnerComponent from '../../../UI/spinner/SpinnerComponent'
import BasicAlert from '../../../UI/Alerts/BasicAlert'
import { store } from '../../../../app/store'
import {
	postNews,
	updateNews,
	deleteNews,
} from '../../../../Services/NewsApiServices'
import {
	addNewsAction,
	updateNewsAction,
	deleteNewsAction,
} from '../../../../actions/actions'
import InputSearchNews from './InputSearchNews'
import { useDispatch, useSelector } from 'react-redux'
import { startGetNews } from '../../../../actions/news'
import HeaderComponent from '../HeaderComponent'

function Novedades() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [inputSearch, setInputSearch] = useState('')

	const dispatch = useDispatch()
	const { news } = useSelector((state) => state.news)

	useEffect(() => {
		try {
			if (inputSearch.length < 3) {
				dispatch(startGetNews())
			} else {
				dispatch(startGetNews(inputSearch))
			}
			setLoading(false)
		} catch (error) {
			setError(true)
		}
	}, [inputSearch])

	const fetchAddNews = (bodyNews) => {
		try {
			;(async () => {
				const response = await postNews(bodyNews)
				store.dispatch(addNewsAction(response.data.data))
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
			})()
		} catch (error) {
			setError(true)
		}
	}
	console.log(store.getState())
	// REEMPLAZAR POR LA INFORMACION QUE VENGA DE LA PANTALLA DE EDITAR
	const body = {
		name: 'pruebaUpdate',
	}

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
		<>
			<div>
				<HeaderComponent />
			</div>

			<section className="sectionTable">
				<InputSearchNews
					inputSearch={inputSearch}
					setInputSearch={setInputSearch}
				/>
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
							{news.length > 0
								? news.map((news) => {
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
		</>
	)
}

export default Novedades
