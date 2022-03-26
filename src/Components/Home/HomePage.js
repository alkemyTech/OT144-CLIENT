import React, { useEffect, useState } from 'react'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import './stylesHomePage.css'
import { getSlides } from '../../Services/slidesService'
import { getNews } from '../../Services/NewsApiServices'
import LayoutPublic from '../Layout/LayoutPublic'
import Card from '../UI/Card/Card'
import { getAllOrganizationData } from '../../Services/organizationService'
import { Link } from 'react-router-dom'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import imgHomePage from '../../ImageProjects/homePage.jpg'

function HomePage() {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await Promise.allSettled([
					getSlides(),
					getNews(),
					getAllOrganizationData(),
				])
				setData(
					response.map((res) => {
						if (res.status === 'fulfilled') {
							return res.value.data.data
						}
						return null
					})
				)

				setLoading(false)
			} catch (e) {
				ErrorAlert()
			}
		})()
	}, [])

	if (loading) {
		return (
			<div className="spinner-container">
				<SpinnerComponent loading={true} />
			</div>
		)
	}

	function dataViewer(indice, mensaje) {
		return data[indice]?.length > 0 ? (
			data[indice]
				.slice(data[indice]?.length - 6, data[indice]?.length)
				.map((element) => {
					return <Card cardItem={element} key={element.id} />
				})
		) : (
			<p>{mensaje}</p>
		)
	}

	return (
		<LayoutPublic>
			<main className="homePage">
				<section>
					<PresentationPage
						title="Bienvenidos!"
						subtitle="FUNDACIÓN SOMOS MAS"
						img={imgHomePage}
						nameImg="Imagen Home"
					/>
				</section>
				<section className="containerNovedades">
					<h1 className="headerTxt">{data[2]?.welcome_text}</h1>
					<h2 className="subtitle">Últimas novedades</h2>
					<div className="list-container">
						{dataViewer(1, 'No hay novedades')}
					</div>
					<Link to="/novedades" className="allNewsButton">
						Ver todas
					</Link>
				</section>
				<section className="containerSlider">
					<div className="list-container">{dataViewer(0, 'No disponible')}</div>
				</section>
			</main>
		</LayoutPublic>
	)
}

export default HomePage
