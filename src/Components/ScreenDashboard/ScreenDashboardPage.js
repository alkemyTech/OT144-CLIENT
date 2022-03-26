import './stylesScreenDashboardPage.css'
import BackOfficeLayout from '../Layout/BackOfficeLayout'
import ScreenDashboardButton from './ScreenDashboardButton'
import { buttons } from './Buttons'

const ScreenDashboardPage = () => {
	return (
		<BackOfficeLayout>
			<main className="screenDashboardPage">
				<div className="containerDashboard">
					<h2>Bienvenido</h2>
					<div className="containerButtons">
						{buttons.map((button, index) => {
							return (
								<ScreenDashboardButton
									path={button.path}
									title={button.title}
									img={button.img}
									alt={button.alt}
									key={`${index}${button.title}`}
								/>
							)
						})}
					</div>
				</div>
			</main>
		</BackOfficeLayout>
	)
}

export default ScreenDashboardPage
