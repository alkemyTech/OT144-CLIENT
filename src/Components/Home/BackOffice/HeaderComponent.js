import React, { useState } from 'react'
import './stylesHeaderComponent.css'
import Logo from './Logo'
import btnMenuImg from '../../../ImageProject/btn-menu.png'

function HeaderComponent() {
	const [btnResponsive, setBtnResponsive] = useState(false)

	const handleClickBtn = () => {
		if (btnResponsive === false) {
			setBtnResponsive(true)
		} else {
			setBtnResponsive(false)
		}
	}

	return (
		<header>
			<Logo />

			<div className="menu-btn" onClick={handleClickBtn}>
				<img src={btnMenuImg} alt="Imagen Btn Menu"></img>
			</div>
		</header>
	)
}

export default HeaderComponent
