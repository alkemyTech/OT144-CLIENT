import React from 'react'
import './stylesScreenDashboardPage.css'
import HeaderComponent from '../Home/BackOffice/HeaderComponent'
import { Routes, Route, Navigate } from 'react-router-dom'
import { userIsAdmin } from '../../../utils/user'
import HomeForm from '../Home/BackOffice/HomeForm'
import RedirecSlides from '../Slides/RedirecSlides'
import SlidesList from '../Slides/SlidesList'
import OrganizationEditForm from '../Home/BackOffice/OrganizationEditForm'
import DataScreen from '../Testimonials/DataScreen'
import MemberList from '../Members/MemberList'
import Categories from '../Home/BackOffice/Categories'
import MembersForm from '../Members/MembersForm'
import UsersList from '../Users/UsersList/UsersList'
import UserNotLogged, { isLogin } from '../Users/UserNotLogged'
import Novedades from '../Home/BackOffice/Novedades'

const ScreenDashboardPage = () => {
  	return (
		<main className='screenDashboardPage' >
			<HeaderComponent/>
			{/* Sidebar */}
			<Routes>
				<Route
					path="/backoffice/organization/edit-home"
					element={userIsAdmin() ? <HomeForm /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/slides/:action"
					element={userIsAdmin() ? <RedirecSlides /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/slides"
					element={userIsAdmin() ? <SlidesList /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/organization/edit"
					element={
						userIsAdmin() ? <OrganizationEditForm /> : <Navigate to="/" />
					}
				/>
				<Route
					path="/backoffice/organization"
					element={userIsAdmin() ? <DataScreen /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/members"
					element={userIsAdmin() ? <MemberList /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/categories"
					element={userIsAdmin() ? <Categories /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/members/edit"
					element={userIsAdmin() ? <MembersForm /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/users"
					element={userIsAdmin() ? <UsersList /> : <Navigate to="/" />}
				/>
				<Route
					path="/backoffice/news"
					element={userIsAdmin() ? <Novedades /> : <Navigate to="/" />}
				/>
			</Routes>
		</main>
  )
}

export default ScreenDashboardPage


