import React, { useState, useEffect } from 'react'
import './Home.css'
import Card from '../UI/Card/Card'
import { getNews, getNewsByTitle } from '../../Services/NewsApiServices'
import { store } from '../../app/store'
import { setNewsAction } from '../../actions/actions'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import LayoutPublic from '../Layout/LayoutPublic'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import imgNovedades from '../../ImageProjects/novedades.jpeg'

export default function Home() {
	const [dataNews, setDataNews] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [search, setSearch] = useState('')

	function getAllNews() {
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
	}

	useEffect(() => {
		getAllNews()
	}, [])

	useEffect(() => {
		if (search.length >= 3) {
			try {
				;(async () => {
					const response = await getNewsByTitle(search)
					store.dispatch(setNewsAction(response.data))
					setDataNews(store.getState().news.news.data)
					setLoading(false)
				})()
			} catch (error) {
				setError(true)
			}
		} else {
			getAllNews()
		}
	}, [search])

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <ErrorAlert />
	}

	function handleChange(event) {
		setSearch(event.target.value)
	}

	return (
		<LayoutPublic>
			<div style={{ width: '100%' }}>
				<PresentationPage
					title="Novedades"
					subtitle="FUNDACIÓN SOMOS MAS"
					img={imgNovedades}
					nameImg="Imagen Novedades"
				/>
				<div className="containerInputNews">
					<div className="containerInputSearch">
						<input
							name="news-search"
							type="search"
							value={search}
							onChange={handleChange}
							className="input-field search"
							placeholder="Buscar novedades"
						/>
					</div>
					<div className="list-container">
						{dataNews.map((data, index) => (
							<Card key={index} cardItem={data} />
						))}
					</div>
				</div>
			</div>
		</LayoutPublic>
	)
}
