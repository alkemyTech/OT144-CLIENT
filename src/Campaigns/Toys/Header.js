import React from 'react'
import LogoJuguetes from '../../ImageProjects/Logo-juguetes.png'
import LogoONG from '../../ImageProjects/SomosMas.png'
import './Header.css'

const Header = () => {
	return (
		<div className="header-container">
			<img src={LogoONG} alt="Logo ONG" className="logoONG" />
			<img src={LogoJuguetes} alt="Logo juguetes" className="logoJuguetes" />
			<h1 className="slogan">JUGUETES POR MÁS SONRISAS</h1>
		</div>
	)
}

export default Header
