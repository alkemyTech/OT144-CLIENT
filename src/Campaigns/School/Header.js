import React from 'react'
import LogoEscuela from '../../ImageProjects/Logo-escolares.png'
import LogoONG from '../../ImageProjects/SomosMas.png'
import './Header.css'

const Header = () => {
	return (
		<div className="header-container">
			<img src={LogoONG} alt="Logo ONG" className="logoONG" />
			<img src={LogoEscuela} alt="Logo escuela" className="logoEscuela" />
			<h1 className="slogan">JUNTOS EN LA VUELTA AL COLE</h1>
		</div>
	)
}

export default Header
