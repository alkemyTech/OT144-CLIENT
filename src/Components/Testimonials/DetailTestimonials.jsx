import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import '../Activities/Detail/stylesActivity.css'
import './Testimonials.css'
import LayoutPublic from '../Layout/LayoutPublic'
import { getTestimonial } from '../../Services/TestimonialsApiService'
import PresentationPage from '../UI/PresentationPage/PresentationPage'

export default function DetailTestimonials() {
	const { id } = useParams()

	const [dataLoading, setDataLoading] = useState({
		loading: true,
		data: [],
		error: '',
	})


	useEffect(() => {
		try {
			; (async () => {
				const response = await getTestimonial(id)
				response.status === 200
					? setDataLoading({
						...dataLoading,
						data: response.data.data,
						loading: false,
					})
					: setDataLoading({
						...dataLoading,
						error: response.error,
						loading: false,
					})
			})()
		} catch (error) {
			setDataLoading({ ...dataLoading, error: error.message, loading: false })
		}
	}, [])

	console.log(dataLoading)

	if (dataLoading.loading) {
		return (
			<div className="spinner-container">
				<SpinnerComponent loading={dataLoading.loading} />
			</div>
		)
	}

	if (dataLoading.error) {
		return <ErrorAlert />
	}

	return (
		<LayoutPublic>
			<main className="homePage">
				<section className="containerActivity">
					<PresentationPage
						title={dataLoading.data.name}
						subtitle="FUNDACIÓN SOMOS MAS"
						img={dataLoading.data.image}
						nameImg={dataLoading.data.name}
					/>
					<div className='contentDescription' dangerouslySetInnerHTML={{ __html: dataLoading.data.description }}>
					</div>
				</section>
			</main>
		</LayoutPublic>
	)
}
