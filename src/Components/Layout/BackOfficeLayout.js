import { Routes } from 'react-router-dom'
import HeaderComponent from '../Home/BackOffice/HeaderComponent'
import SidebarBackOffice from '../Home/BackOffice/ui/sidebarBackOffice/SidebarBackOffice'

const BackOfficeLayout = () => {
	return (
		<>
			<HeaderComponent />
			<SidebarBackOffice />
			<Routes></Routes>
		</>
	)
}

export default BackOfficeLayout
