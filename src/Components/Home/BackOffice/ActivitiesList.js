import ActivitiesTable from './ActivitiesTable'
import './ActivitiesList.css'
import BackOfficeLayout from '../../Layout/BackOfficeLayout'

const ActivitiesList = () => {
	return (
		<main>
			<BackOfficeLayout>
				<div className="containerActivities">
					<h1 className="headerTxt">Lista de Actividades</h1>
					<ActivitiesTable />
				</div>
			</BackOfficeLayout>
		</main>
	)
}

export default ActivitiesList
