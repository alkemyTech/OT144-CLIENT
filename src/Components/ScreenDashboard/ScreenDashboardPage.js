import './stylesScreenDashboardPage.css'
import HeaderComponent from '../Home/BackOffice/HeaderComponent'
import BackOfficeLayout from '../Layout/BackOfficeLayout'

const ScreenDashboardPage = () => {
	return (
		<BackOfficeLayout>
			<main className="screenDashboardPage">
				<HeaderComponent />
				<h2>Bienvenido</h2>
			</main>
		</BackOfficeLayout>
	)
}

export default ScreenDashboardPage
