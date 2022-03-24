import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './LOGO-SOMOS MAS.png'
import SideBarPublic from '../../Home/SideBarPublic.js'
import './PublicHeader.css'
import btnMenuImg from '../../../ImageProject/btn-menu.png'
import { isLogin } from '../../../Components/UI/Errors/UserNotLogged'
import useWindowDimensions from '../../../hooks/useWindowDimensions.js'

export default function PublicHeader() {
	const datos = [
		{ nombre: 'Inicio', url: '/' },
		{ nombre: 'Nosotros', url: '/about-us' },
		{ nombre: 'Actividades', url: '/activities' },
		{ nombre: 'Novedades', url: '/novedades' },
		{ nombre: 'Testimonios', url: '/testimonials' },
		{ nombre: 'Contacto', url: '/contact' },
		{ nombre: 'Contribuye', url: '/donar' },
	]

	const [activePath, setActivePath] = useState('')
	const [isLoginRegister, setIsLoginRegister] = useState(false)

	const [btnResponsive, setBtnResponsive] = useState(false)

	const { width } = useWindowDimensions()

	const handleClickBtn = () => {
		if (btnResponsive === false) {
			setBtnResponsive(true)
		} else {
			setBtnResponsive(false)
		}
	}

	useEffect(() => {
		setActivePath(window.location.pathname)
	}, [activePath])

	useEffect(() => {
		if (isLogin === true) {
			setIsLoginRegister(true)
		}
	}, [])

	return (
		<header className={`containerHeader ${width <= 842 ? 'reverse' : ''}`}>
			<div className="containerLogo">
				<img src={Logo} alt="logo" />
			</div>
			<SideBarPublic isOpen={btnResponsive} />
			{width > 842 ? (
				<>
					<nav className="containerHeaderNav">
						<ul>
							{datos.map((dato, index) => (
								<li
									key={`${dato.nombre}${index}`}
									id={dato.url === activePath ? 'activePath' : null}
								>
									<Link to={dato.url}>{dato.nombre}</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className="containerHeaderButtons">
						{!isLoginRegister && (
							<>
								<Link data-testid="button-register" to="/register">
									<button>Registrate</button>
								</Link>
								<Link data-testid="button-login" to="/login">
									<button>Inicia sesión</button>
								</Link>
							</>
						)}
					</div>
				</>
			) : (
				<div className="menu-btn" onClick={handleClickBtn}>
					<img src={btnMenuImg} alt="Imagen Btn Menu"></img>
				</div>
			)}
		</header>
	)
}
