import Card from '../../UI/Card/Card'
import { useEffect, useState } from 'react'
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import ErrorAlert from '../../UI/Alerts/ErrorAlert'
import { store } from '../../../app/store'
import { getAllMembers } from '../../../Services/membersService'
import { getMemberActions } from '../../../actions/memberActions'

const ListMember = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		;(async () => {
			setLoading(true)
			try {
				const response = await getAllMembers()
				store.dispatch(getMemberActions(response.data.data))
				setData(response.data.data)
			} catch (e) {
				setError(e.message)
			}
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return (
			<div className="spinner-container">
				<SpinnerComponent loading={true} />
			</div>
		)
	}

	if (error) {
		return <ErrorAlert />
	}

	console.log(store.getState())
	return (
		<section className="list-container">
			{data?.map((member) => (
				<Card cardItem={member} key={member.id} />
			))}
		</section>
	)
}

export default ListMember
