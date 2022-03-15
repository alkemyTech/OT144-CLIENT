import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ActivitiesForm from './Components/Activities/ActivitiesForm/ActivitiesForm'
import CategoriesForm from './Components/Categories/CategoriesForm'
import TestimonialForm from './Components/Testimonials/TestimonialsForm'
import UserForm from './Components/Users/UsersForm'
import SchoolCampaign from './Campaigns/School/SchoolCampaign'
import ToysCampaign from './Campaigns/Toys/ToysCampaign'
import MembersForm from './Components/Members/MembersForm'
import ProjectsForm from './Components/Projects/ProjectsForm'
import Activities from './Components/Activities/Actividades'
import AboutPrincipal from './Components/About/AboutPrincipal'
import LoginForm from './Components/Auth/LoginForm'
import ScreenDashboardPage from './Components/ScreenDashboard/ScreenDashboardPage'
import HomePage from './Components/Home/HomePage'
import Register from './Components/Auth/RegisterForm'
import Contact from './Components/Contact/Contact'
import CreateNews from './Components/News/CreateNews'
import NewsHome from './Components/News/Home'
import Donacion from './Components/Donations/Donacion'
import Gracias from './Components/Donations/Gracias'
import DetailNew from './Components/News/Detail/DetailNew'
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail'
import Newsletter from '../Newsletter/Newsletter'
import UserNotLogged, { isLogin } from './Components/UI/Errors/UserNotLogged'
import { contactRestrict } from './Components/Contact/ContactRestrict';
import userIsAdmin from './Components/UI/Errors/UserIsAdmin'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<HomePage />} />
					<Route path="/contact" element={ contactRestrict() ? <Contact/> : <HomePage/>} />
					<Route path="/create-activity" element={<ActivitiesForm />} />
					<Route path="/create-category" element={<CategoriesForm />} />
					<Route path="/create-news" element={<CreateNews />} />
					<Route
						path="/backoffice"
						element={
							userIsAdmin() ? <ScreenDashboardPage /> : <Navigate to="/" />
						}
					/>
					<Route path="/create-testimonials" element={<TestimonialForm />} />
					<Route path="/create-user" element={<UserForm />} />
					<Route path="/create-member" element={<MembersForm />} />
					<Route path="/create-project" element={<ProjectsForm />} />
					<Route path="/school-campaign" element={<SchoolCampaign />} />
					<Route path="/toys-campaign" element={<ToysCampaign />} />
					<Route path="/about-us" element={<AboutPrincipal />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/register" element={<Register />} />
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
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
