import { useState, useEffect } from 'react'
import TitleComponent from '../title/TitleComponent'
import { getRequest } from '../../Services/publicApiService'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import Card from '../UI/Card/Card'
import LayoutPublic from '../Layout/LayoutPublic'
import SearchActivitiesInput from './SearchActivitiesInput'
import img from './Foto11.jpg'
import './Actividades.css'

const Actividades = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const [searchInput, setSearchInput] = useState('')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		const getActivities = async () => {
			try {
				const response = await getRequest('/activities')
				if (response.status === 200) {
					setTimeout(() => {
						setLoading(false)
						setData(response.data.data)
					}, 1000)
				}
				// setData(response.data.data)
			} catch (e) {
				setLoading(false)
				setError(true)
				return <ErrorAlert />
			}
		}
		getActivities()
	}, [])

	if (loading) {
		return (
			<LayoutPublic>
				<div className="spinner-container">
					<SpinnerComponent loading={loading} />
				</div>
			</LayoutPublic>
		)
	}

	if (error) {
		return <ErrorAlert />
	}

	return (
		<LayoutPublic>
			<TitleComponent
				title="Actividades"
				img={img}
				nameImg="Actividad al aire libre"
			/>
			<div className="containerActivitiesTitle">
				<SearchActivitiesInput
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					searchResults={searchResults}
					setSearchResults={setSearchResults}
					data={data}
				/>
				{searchResults.length > 0 && (
					<div className="list-container">
						{searchResults.map((activity) => (
							<Card
								key={activity.id}
								cardItem={activity}
								link={`/activities/${activity.id}`}
							/>
						))}
					</div>
				)}

				{searchResults < 1 && (
					<div className="list-container">
						{data.map((activity, index) => (
							<Card key={activity.id} cardItem={activity} />
						))}
					</div>
				)}
			</div>
		</LayoutPublic>
	)
}

export default Actividades
