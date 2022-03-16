import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import HomeForm from './Components/Home/HomeForm'
import ActivitiesForm from './Components/Activities/ActivitiesForm/ActivitiesForm'
import CategoriesForm from './Components/Categories/CategoriesForm'
import DataScreen from './Components/Testimonials/DataScreen'
import TestimonialForm from './Components/Testimonials/TestimonialsForm'
import UserForm from './Components/Users/UsersForm'
import SchoolCampaign from './Campaigns/School/SchoolCampaign'
import ToysCampaign from './Campaigns/Toys/ToysCampaign'
import MemberList from './Components/Members/MemberList'
import MembersForm from './Components/Members/MembersForm'
import ProjectsForm from './Components/Projects/ProjectsForm'
import Activities from './Components/Activities/Actividades'
import AboutPrincipal from './Components/About/AboutPrincipal'
import LoginForm from './Components/Auth/LoginForm'
import OrganizationEditForm from './Components/Home/BackOffice/OrganizationEditForm'
import ScreenDashboardPage from './Components/ScreenDashboard/ScreenDashboardPage'
import HomePage from './Components/Home/HomePage'
import Register from './Components/Auth/RegisterForm'
import Contact from './Components/Contact/Contact'
import CreateNews from './Components/News/CreateNews'
import NewsHome from './Components/News/Home'
import UsersList from './Components/Users/UsersList/UsersList'
import Novedades from './Components/Home/BackOffice/Novedades'
import Donacion from './Components/Donations/Donacion'
import Gracias from './Components/Donations/Gracias'
import DetailNew from './Components/News/Detail/DetailNew'
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail'
import Categories from './Components/Home/BackOffice/Categories'
import RedirecSlides from './Components/Slides/RedirecSlides'
import SlidesList from './Components/Slides/SlidesList'
import Newsletter from './Components/Newsletter/Newsletter'
import UserNotLogged, { isLogin } from './Components/UI/Errors/UserNotLogged'
import { contactRestrict } from './Components/Contact/ContactRestrict'
import userIsAdmin from './Components/UI/Errors/UserIsAdmin'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact element={<HomePage />} />
					<Route
						path="/contact"
						element={contactRestrict() ? <Contact /> : <HomePage />}
					/>
					<Route path="/create-activity" element={<ActivitiesForm />} />
					<Route path="/create-category" element={<CategoriesForm />} />
					<Route path="/create-news" element={<CreateNews />} />
					<Route
						path="/backoffice/organization/edit-home"
						element={userIsAdmin() ? <HomeForm /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/slides/:action"
						element={userIsAdmin() ? <RedirecSlides /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/slides"
						element={userIsAdmin() ? <SlidesList /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/organization/edit"
						element={
							userIsAdmin() ? <OrganizationEditForm /> : <Redirect to="/" />
						}
					/>
					<Route
						path="/backoffice/organization"
						element={userIsAdmin() ? <DataScreen /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/members"
						element={userIsAdmin() ? <MemberList /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/categories"
						element={userIsAdmin() ? <Categories /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/members/edit"
						element={userIsAdmin() ? <MembersForm /> : <Redirect to="/" />}
					/>
					<Route
						path="/backoffice/users"
						element={userIsAdmin() ? <UsersList /> : <Redirect to="/" />}
					/>
					<Route path="/create-testimonials" element={<TestimonialForm />} />
					<Route path="/create-user" element={<UserForm />} />
					<Route path="/create-member" element={<MembersForm />} />
					<Route path="/create-project" element={<ProjectsForm />} />
					<Route path="/school-campaign" element={<SchoolCampaign />} />
					<Route path="/toys-campaign" element={<ToysCampaign />} />
					<Route path="/about-us" element={<AboutPrincipal />} />
					<Route path="/login" element={<LoginForm />} />
					<Route
						path="/backoffice"
						element={
							userIsAdmin() ? <ScreenDashboardPage /> : <Redirect to="/" />
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route
						path="/backoffice/news"
						element={userIsAdmin() ? <Novedades /> : <Redirect to="/" />}
					/>
					<Route path="/donar" element={<Donacion />} />
					<Route path="/gracias" element={<Gracias />} />
					<Route path="/novedades/:id" element={<DetailNew />} />
					<Route path="/activities" element={<Activities />} />
					<Route path="/activities/:id" element={<ActivitiesDetail />} />
					<Route path="/Novedades" element={<NewsHome />} />
					<Route
						path="/newsletter"
						element={isLogin() ? <Newsletter /> : <UserNotLogged />}
					/>
				</Switch>
			</Router>
		</>
	)
}

export default App
