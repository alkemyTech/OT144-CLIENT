import { useEffect, useState } from 'react'
import { getTestimonials } from '../../Services/TestimonialsApiService'
import Card from '../UI/Card/Card'
import { store } from '../../app/store'
import { getTestimonialsAction } from '../../actions/actions'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import Title from '../title/TitleComponent'
import LayoutPublic from '../Layout/LayoutPublic'
import img from './Foto6.jpg'

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
			<Title title={'Testimonios'} img={img} nameImg="Testimonios" />
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
