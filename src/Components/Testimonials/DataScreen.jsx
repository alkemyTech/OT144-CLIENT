import React from 'react'
import { useHistory } from 'react-router-dom'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import { getAllOrganizationData } from '../../Services/organizationService'
import './dataScreen.css'

const DataScreen = () => {
	const history = useHistory()
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		const getOrganizationData = async () => {
			const response = await getAllOrganizationData()
			console.log(response.data)
			setData(response.data)
		}
		getOrganizationData()
	}, [])

	return (
		<BackOfficeLayout>
			<div className='center'>
				<h1 className='headerTxt'>{data.data?.name}</h1>
				<img src={data.data?.logo} alt="logo" width="200px" height="200px" />
				<p>{data.data?.long_description}</p>
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
