import React from 'react'
import './stylesLogo.css'
import { Link } from 'react-router-dom'
import logoSomosMas from '../../../ImageProject/SomosMas.png'
import LazyLoadImages from '../../UI/LazyLoadImages/LazyLoadImages'

function Logo() {
	return (
		<div>
			<Link to="/">
				<LazyLoadImages
					src={logoSomosMas}
					altText="Imagen Logo"
					classText="logo"
				/>
			</Link>
		</div>
	)
}

export default Logo
