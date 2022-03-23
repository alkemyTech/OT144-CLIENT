import React from 'react'
import './stylesLogo.css'
import { Link } from 'react-router-dom'
import logoSomosMas from '../../../ImageProject/SomosMas.png'

function Logo() {
	return (
		<div>
			<Link to="/">
				<img src={logoSomosMas} alt="logo" />
			</Link>
		</div>
	)
}

export default Logo
