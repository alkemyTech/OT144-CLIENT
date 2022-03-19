import React from 'react'
import { useHistory } from 'react-router-dom'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import { getAllOrganizationData } from '../../Services/organizationService'

const DataScreen = () => {
	const history = useHistory()
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		const getOrganizationData = async () => {
			const response = await getAllOrganizationData()
			setData(response.data)
		}
		getOrganizationData()
	}, [])

	return (
		<BackOfficeLayout>
			<div>
				<h1>{data.data?.name}</h1>
				<img src={data.data?.logo} alt="logo" width="200px" height="200px" />
				<p>{data.data?.short_description}</p>
				<button
					className="submit-btn"
					onClick={() => history.replace('/backoffice/organization/edit')}
				>
					Editar
				</button>
			</div>
		</BackOfficeLayout>
	)
}

export default DataScreen
