import MembersForm from '../Components/Members/MembersForm'
import ScreenDashboardPage from '../Components/ScreenDashboard/ScreenDashboardPage'
import UsersList from '../Components/Users/UsersList/UsersList'
import UsersForm from '../Components/Users/UsersForm'
import Novedades from '../Components/Home/BackOffice/News/Novedades'
import HomeForm from '../Components/Home/HomeForm'
import RedirecSlides from '../Components/Slides/RedirecSlides'
import SlidesList from '../Components/Slides/SlidesList'
import OrganizationEditForm from '../Components/Home/BackOffice/OrganizationEditForm'
import DataScreen from '../Components/Testimonials/DataScreen'
import MemberList from '../Components/Members/MemberList'
import Categories from '../Components/Home/BackOffice/Categories'

const pathBackoffice = '/backoffice'

const protectedRoutes = [
	{
		Component: ScreenDashboardPage,
		path: `${pathBackoffice}`,
		exact: true,
	},
	{
		Component: UsersList,
		path: `${pathBackoffice}/users`,
		exact: true,
	},
	{
		Component: UsersForm,
		path: `${pathBackoffice}/users/create`,
		exact: true,
	},
	{
		Component: MembersForm,
		path: `${pathBackoffice}/members/edit`,
		exact: true,
	},
	{
		Component: Novedades,
		path: `${pathBackoffice}/news`,
		exact: true,
	},
	{
		Component: HomeForm,
		path: `${pathBackoffice}/edit-home`,
		exact: true,
	},
	{
		Component: RedirecSlides,
		path: `${pathBackoffice}/slides/:action`,
		exact: true,
	},
	{
		Component: SlidesList,
		path: `${pathBackoffice}/slides`,
		exact: true,
	},
	{
		Component: OrganizationEditForm,
		path: `${pathBackoffice}/organization/edit`,
		exact: true,
	},
	{
		Component: DataScreen,
		path: `${pathBackoffice}/organization`,
		exact: true,
	},
	{
		Component: MemberList,
		path: `${pathBackoffice}/members`,
		exact: true,
	},
	{
		Component: Categories,
		path: `${pathBackoffice}/categories`,
		exact: true,
	},
]

export default protectedRoutes
