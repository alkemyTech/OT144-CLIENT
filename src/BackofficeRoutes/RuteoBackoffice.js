import { Route, Switch } from 'react-router'
import userIsAdmin from '../Components/UI/Errors/UserIsAdmin'
import MembersForm from '../Components/Members/MembersForm'
import UsersList from '../Components/Users/UsersList/UsersList'
import Novedades from '../Components/Home/BackOffice/News/Novedades'
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
		<Switch>
			<Route path="/" component={userIsAdmin(ScreenDashboardPage)} />
			<Route path="edit" component={userIsAdmin(MembersForm)} />
			<Route path="users" component={userIsAdmin(UsersList)} />
			<Route path="news" component={userIsAdmin(Novedades)} />
			<Route path="organization/edit-home" component={userIsAdmin(HomeForm)} />
			<Route path="slides/:action" component={userIsAdmin(RedirecSlides)} />
			<Route path="slides" component={userIsAdmin(SlidesList)} />
			<Route
				path="organization/edit"
				component={userIsAdmin(OrganizationEditForm)}
			/>
			<Route path="organization" component={userIsAdmin(DataScreen)} />
			<Route path="members" component={userIsAdmin(MemberList)} />
			<Route path="categories" component={userIsAdmin(Categories)} />
		</Switch>
	)
}
