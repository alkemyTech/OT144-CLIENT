import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { bounceTransition, mapStyles } from './utils/routerTransition'
import ActivitiesForm from './Components/Activities/ActivitiesForm/ActivitiesForm'
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
import Donacion from './Components/Donations/Donacion'
import Gracias from './Components/Donations/Gracias'
import DetailNew from './Components/News/Detail/DetailNew'
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail'
import Newsletter from './Components/Newsletter/Newsletter'
import UserNotLogged, { isLogin } from './Components/UI/Errors/UserNotLogged'
import { LoginAndAdmin } from '../src/Components/UI/Restrictions/LoginAndAdmin'
import Testimonials from './Components/Testimonials/Testimonials'
import PageNoFound from './Components/Auth/PageNoFound'
import MembersForm from './Components/Members/MembersForm'

import PrivateRoute from './BackofficeRoutes/PrivateRoute'
import protectedRoutes from './BackofficeRoutes/Routes'
import userIsAdmin from './Components/UI/Errors/UserIsAdmin'
import DetailTestimonials from './Components/Testimonials/DetailTestimonials'

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
					<Route exact path="/" component={HomePage} />
					{protectedRoutes.map((route, index) => (
						<PrivateRoute
							exact={route.exact}
							path={route.path}
							component={route.Component}
							key={`${index}${route.path}`}
						/>
					))}
					<Route
						path="/contact"
						render={() => (!userIsAdmin() ? <Contact /> : <Redirect to="/" />)}
					/>
					<Route
						path="/create-activity"
						component={isLogin() ? ActivitiesForm : <Redirect to="/login" />}
					/>
					<Route
						path="/create-news"
						component={isLogin() ? CreateNews : <Redirect to="/login" />}
					/>
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
					<Route
						path="/login"
						render={() => (isLogin() ? <Redirect to="/" /> : <LoginForm />)}
					/>
					<Route
						path="/register"
						render={() => (isLogin() ? <Redirect to="/" /> : <Register />)}
					/>
					<Route
						path="/donar"
						render={() =>
							LoginAndAdmin() ? <Donacion /> : <Redirect to="/" />
						}
					/>
					<Route path="/gracias" component={Gracias} />
					<Route path="/novedades/:id" component={DetailNew} />
					<Route exact path="/activities" component={Activities} />
					<Route path="/activities/:id" component={ActivitiesDetail} />
					<Route path="/novedades" component={NewsHome} />
					<Route
						path="/newsletter"
						component={isLogin() ? Newsletter : UserNotLogged}
					/>
					<Route path="/testimonials/:id" component={DetailTestimonials} />
					<Route path="/testimonials" component={Testimonials} />
					<Route component={PageNoFound} />
				</AnimatedSwitch>
			</Router>
		</>
	)
}

export default App
