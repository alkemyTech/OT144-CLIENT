import React, { useEffect, useState } from 'react'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import './stylesHomePage.css'
import { getSlides } from '../../Services/slidesService'
import LayoutPublic from '../Layout/LayoutPublic'
import SliderComponent from './SliderComponent'

function HomePage() {
	const [loading, setLoading] = useState(false)
	const [, setData] = useState([])

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await Promise.allSettled([
					getSlides('/slides'),
					// getNews("/news"),
				])
				setData(
					response.map((res) => {
						if (res.status === 'fulfilled') {
							return res.value
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

	return (
		<LayoutPublic>
			<main className="homePage">
				<section className="containerSlider">
					<SliderComponent />
				</section>
				<section className="containerNovedades">
					<h2>Aqui va el componente Novedades</h2>
				</section>
			</main>
		</LayoutPublic>
	)
}

export default HomePage
