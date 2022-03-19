import HeaderComponent from '../Home/BackOffice/HeaderComponent'
import SidebarBackOffice from '../Home/BackOffice/ui/sidebarBackOffice/SidebarBackOffice'

const BackOfficeLayout = ({ children }) => {
	return (
		<>
			<HeaderComponent />
			<SidebarBackOffice />
			<div>{children}</div>
		</>
	)
}

export default BackOfficeLayout
