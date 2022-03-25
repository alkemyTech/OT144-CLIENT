import React from 'react'
import LogoEscuela from '../../ImageProjects/Logo-escolares.png'
import LogoONG from '../../ImageProjects/SomosMas.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className="header-container">
			<Link to="/">
				<img src={LogoONG} alt="Logo ONG" className="logoONG" />
			</Link>
			<img src={LogoEscuela} alt="Logo escuela" className="logoEscuela" />
			<h1 className="slogan">JUNTOS EN LA VUELTA AL COLE</h1>
		</div>
	)
}

export default Header
