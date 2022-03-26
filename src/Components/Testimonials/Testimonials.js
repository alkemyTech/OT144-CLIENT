import { useEffect, useState } from 'react'
import { getTestimonials } from '../../Services/TestimonialsApiService'
import Card from '../UI/Card/Card'
import { store } from '../../app/store'
import { getTestimonialsAction } from '../../actions/actions'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import LayoutPublic from '../Layout/LayoutPublic'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import imgTestimonios from '../../ImageProjects/testimonios.jpg'

export default function Testimonials() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(async () => {
		try {
			const response = await getTestimonials()
			store.dispatch(getTestimonialsAction(response.data.data))
			setData(store.getState().testimonials.testimonials)
			setLoading(false)
		} catch (error) {
			setError(true)
		}
	}, [])

	if (loading) {
		return <SpinnerComponent />
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<LayoutPublic>
			<PresentationPage
				title="Testimonios"
				subtitle="FUNDACIÓN SOMOS MAS"
				img={imgTestimonios}
				nameImg="Imagen Testimonios"
			/>
			<div className="new-list-container">
				{data
					? data.map((dato) => {
						return <Card cardItem={dato} key={dato.id} />
					  })
					: null}
			</div>
		</LayoutPublic>
	)
}
