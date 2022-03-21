import { Route, BrowserRouter as Router } from 'react-router-dom'
import userIsAdmin from '../Components/UI/Errors/UserIsAdmin'
import MembersForm from '../Components/Members/MembersForm'
import UsersList from '../Components/Users/UsersList/UsersList'
import HomeForm from '../Components/Home/HomeForm'
import RedirecSlides from '../Components/Slides/RedirecSlides'
import SlidesList from '../Components/Slides/SlidesList'
import OrganizationEditForm from '../Components/Home/BackOffice/OrganizationEditForm'
import DataScreen from '../Components/Testimonials/DataScreen'
import MemberList from '../Components/Members/MemberList'
import Categories from '../Components/Home/BackOffice/Categories'
import ScreenDashboardPage from '../Components/ScreenDashboard/ScreenDashboardPage'

export default function RuteoBackoffice() {
	return (
		<Router>
			<Route path="/" element={userIsAdmin(ScreenDashboardPage)} />
			<Route path="edit" element={userIsAdmin(MembersForm)} />
			<Route path="users" element={userIsAdmin(UsersList)} />
			<Route path="organization/edit-home" element={userIsAdmin(HomeForm)} />
			<Route path="slides/:action" element={userIsAdmin(RedirecSlides)} />
			<Route path="slides" element={userIsAdmin(SlidesList)} />
			<Route
				path="organization/edit"
				element={userIsAdmin(OrganizationEditForm)}
			/>
			<Route path="organization" element={userIsAdmin(DataScreen)} />
			<Route path="members" element={userIsAdmin(MemberList)} />
			<Route path="categories" element={userIsAdmin(Categories)} />
		</Router>
	)
}
