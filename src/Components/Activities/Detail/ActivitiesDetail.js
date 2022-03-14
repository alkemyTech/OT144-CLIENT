import TitleComponent from '../../title/TitleComponent'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { getActivitiesId } from '../../../Services/ActivityApiService'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import './stylesActivity.css'

export default function ActivitiesDetail() {
	const { id } = useParams()

	const [dataLoading, setDataLoading] = useState({
		loading: true,
		data: [],
		error: '',
	})

	useEffect(() => {
		try {
			;(async () => {
				const response = await getActivitiesId(id)
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
		<section className="containerActivity">
			<TitleComponent
				title={dataLoading.data.name}
				img={dataLoading.data.image}
			/>
			<p>{dataLoading.data.description}</p>
		</section>
	)
}
