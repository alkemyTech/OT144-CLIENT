import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import { LoginAndAdmin } from '../src/Components/UI/Restrictions/LoginAndAdmin'
import Testimonials from './Components/Testimonials/Testimonials'
import PageNoFound from './Components/Auth/PageNoFound'
import Novedades from './Components/Home/BackOffice/News/Novedades'

// eslint-disable-next-line
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<HomePage />} />
					<Route
						path="/contact"
						element={contactRestrict() ? <Contact /> : <HomePage />}
					/>
					<Route
						path="/create-activity"
						element={isLogin() ? <ActivitiesForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/create-category"
						element={isLogin() ? <CategoriesForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/create-news"
						element={isLogin() ? <CreateNews /> : <Navigate to="/login" />}
					/>
					<Route
						path="/backoffice/organization/edit-home"
						element={userIsAdmin(HomeForm)}
					/>
					<Route
						path="/backoffice/slides/:action"
						element={userIsAdmin(RedirecSlides)}
					/>
					<Route path="/backoffice/slides" element={userIsAdmin(SlidesList)} />
					<Route
						path="/backoffice/organization/edit"
						element={userIsAdmin(OrganizationEditForm)}
					/>
					<Route
						path="/backoffice/organization"
						element={userIsAdmin(DataScreen)}
					/>
					<Route path="/backoffice/members" element={userIsAdmin(MemberList)} />
					<Route
						path="/backoffice/categories"
						element={userIsAdmin(Categories)}
					/>
					<Route
						path="/backoffice/members/edit"
						element={userIsAdmin(MembersForm)}
					/>
					<Route path="/backoffice/users" element={userIsAdmin(UsersList)} />
					<Route
						path="/create-testimonials"
						element={isLogin() ? <TestimonialForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/create-user"
						element={isLogin() ? <UserForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/create-member"
						element={isLogin() ? <MembersForm /> : <Navigate to="/login" />}
					/>
					<Route
						path="/create-project"
						element={isLogin() ? <ProjectsForm /> : <Navigate to="/login" />}
					/>
					<Route path="/school-campaign" element={<SchoolCampaign />} />
					<Route path="/toys-campaign" element={<ToysCampaign />} />
					<Route path="/about-us" element={<AboutPrincipal />} />
					<Route
						path="/login"
						element={isLogin() ? <HomePage /> : <LoginForm />}
					/>
					<Route
						path="/backoffice"
						element={userIsAdmin(ScreenDashboardPage)}
					/>
					<Route
						path="/register"
						element={isLogin() ? <HomePage /> : <Register />}
					/>
					<Route
						path="/donar"
						element={LoginAndAdmin() ? <Donacion /> : <HomePage />}
					/>
					<Route path="/gracias" element={<Gracias />} />
					<Route path="/novedades/:id" element={<DetailNew />} />
					<Route path="/activities" element={<Activities />} />
					<Route path="/activities/:id" element={<ActivitiesDetail />} />
					<Route path="/Novedades" element={<NewsHome />} />
					<Route
						path="/newsletter"
						element={isLogin() ? <Newsletter /> : <UserNotLogged />}
					/>
					<Route path="/testimonials" element={<Testimonials />} />
					<Route component={PageNoFound} />
					<Route path="/backoffice/news" element={<Novedades />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
