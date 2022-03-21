import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import userIsAdmin from '../Components/UI/Errors/UserIsAdmin'

const PrivateRoute = ({ component: Component, path, exact }) => {
	if (!userIsAdmin()) {
		return <Redirect to="/" />
	}

	return <Route exact={exact} path={path} component={Component} />
}

export default PrivateRoute
