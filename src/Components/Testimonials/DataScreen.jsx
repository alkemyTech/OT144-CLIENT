import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllOrganizationData } from '../../Services/organizationService'

const DataScreen = () => {
	let navigate = useNavigate()
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		const getOrganizationData = async () => {
			const response = await getAllOrganizationData()
			setData(response.data)
		}
		getOrganizationData()
	}, [])

	return (
		<div>
			<h1>{data.data?.name}</h1>
			<img src={data.data?.logo} alt="logo" width="200px" height="200px" />
			<p>{data.data?.short_description}</p>
			<button
				className="submit-btn"
				onClick={() => navigate('/backoffice/organization/edit')}
			>
				Editar
			</button>
		</div>
	)
}

export default DataScreen
