import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { bounceTransition, mapStyles } from './utils/routerTransition'
import HomeForm from './Components/Home/HomeForm'
import ActivitiesForm from './Components/Activities/ActivitiesForm/ActivitiesForm'
import CategoriesForm from './Components/Categories/CategoriesForm'
import TestimonialForm from './Components/Testimonials/TestimonialsForm'
import UserForm from './Components/Users/UsersForm'
import SchoolCampaign from './Campaigns/School/SchoolCampaign'
import ToysCampaign from './Campaigns/Toys/ToysCampaign'
import ProjectsForm from './Components/Projects/ProjectsForm'
import Activities from './Components/Activities/Actividades'
import AboutPrincipal from './Components/About/AboutPrincipal'
import LoginForm from './Components/Auth/LoginForm'
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
import Newsletter from './Components/Newsletter/Newsletter'
import UserNotLogged, { isLogin } from './Components/UI/Errors/UserNotLogged'
import { contactRestrict } from './Components/Contact/ContactRestrict'
import RuteoBackoffice from './BackofficeRoutes/RuteoBackoffice'
import userIsAdmin from './Components/UI/Errors/UserIsAdmin'
import { LoginAndAdmin } from '../src/Components/UI/Restrictions/LoginAndAdmin'
import Testimonials from './Components/Testimonials/Testimonials'
import PageNoFound from './Components/Auth/PageNoFound'
import MembersForm from './Components/Members/MembersForm'

function App() {
	return (
		<>
			<Router>
				<AnimatedSwitch
					atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
					mapStyles={mapStyles}
					className="route-wrapper"
				>
					<Route path="/" exact component={HomePage} />
					<Route
						path="/backoffice/*"
						component={userIsAdmin(RuteoBackoffice)}
					/>
					<Route
						path="/contact"
						component={contactRestrict() ? Contact : HomePage}
					/>
					<Route
						path="/create-activity"
						component={isLogin() ? ActivitiesForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-category"
						component={isLogin() ? CategoriesForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-news"
						component={isLogin() ? CreateNews : <Redirect to="/login" />}
					/>
					<Route
						path="/backoffice/organization/edit-home"
						component={userIsAdmin(HomeForm)}
					/>
					<Route path="/backoffice/users" component={userIsAdmin(UsersList)} />
					<Route
						path="/create-testimonials"
						component={isLogin() ? TestimonialForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-user"
						component={isLogin() ? UserForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-member"
						component={isLogin() ? MembersForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-project"
						component={isLogin() ? ProjectsForm : <Redirect to="/login" />}
					/>
					<Route path="/school-campaign" component={SchoolCampaign} />
					<Route path="/toys-campaign" component={ToysCampaign} />
					<Route path="/about-us" component={AboutPrincipal} />
					<Route path="/login" component={isLogin() ? HomePage : LoginForm} />
					<Route path="/register" component={isLogin() ? HomePage : Register} />
					<Route
						path="/donar"
						component={LoginAndAdmin() ? Donacion : HomePage}
					/>
					<Route path="/gracias" component={Gracias} />
					<Route path="/novedades/:id" component={DetailNew} />
					<Route path="/activities" component={Activities} />
					<Route path="/activities/:id" component={ActivitiesDetail} />
					<Route path="/Novedades" component={NewsHome} />
					<Route
						path="/newsletter"
						component={isLogin() ? Newsletter : UserNotLogged}
					/>
					<Route path="/testimonials" component={Testimonials} />
					<Route component={PageNoFound} />
				</AnimatedSwitch>
			</Router>
		</>
	)
}

export default App
