import React, { useState } from 'react'
import './stylesHeaderComponent.css'
import Logo from './Logo'
import btnMenuImg from '../../../ImageProject/btn-menu.png'
import SidebarBackOffice from './ui/sidebarBackOffice/SidebarBackOffice'

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
		<header className="backofficeHeader">
			<SidebarBackOffice isOpen={btnResponsive} />
			<div className="menu-btn" onClick={handleClickBtn}>
				<img src={btnMenuImg} alt="Imagen Btn Menu"></img>
			</div>

			<Logo />
		</header>
	)
}

export default HeaderComponent
