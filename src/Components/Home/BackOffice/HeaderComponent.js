import React, { useState } from 'react'
import './stylesHeaderComponent.css'
import Logo from './Logo'
import btnMenuImg from '../../../ImageProject/btn-menu.png'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../../actions/auth'

function HeaderComponent() {
	const { isAuthenticated } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const [btnResponsive, setBtnResponsive] = useState(false)

	const handleClickBtn = () => {
		if (btnResponsive === false) {
			setBtnResponsive(true)
		} else {
			setBtnResponsive(false)
		}
	}
	const handleLogOut = () => {
		dispatch(startLogout())
	}
	return (
		<header>
			<Logo />

			<div className="menu-btn" onClick={handleClickBtn}>
				<img src={btnMenuImg} alt="Imagen Btn Menu"></img>
			</div>
			{isAuthenticated ? (
				<button className="btn-logout" onClick={handleLogOut}>
					Cerrar sesión
				</button>
			) : null}
		</header>
	)
}

export default HeaderComponent
