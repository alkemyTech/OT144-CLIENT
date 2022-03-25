import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './LOGO-SOMOS MAS.png'
import SideBarPublic from '../../Home/SideBarPublic.js'
import './PublicHeader.css'
import btnMenuImg from '../../../ImageProject/btn-menu.png'
import { isLogin } from '../../../Components/UI/Errors/UserNotLogged'
import useWindowDimensions from '../../../hooks/useWindowDimensions.js'

const generarId = () => {
	const random = Math.random().toString(36)
	const fecha = Date.now().toString(36)
	return random + fecha
}

const datos = [
	{ itemsId: generarId(), nombre: 'Inicio', url: '/' },
	{ itemsId: generarId(), nombre: 'Nosotros', url: '/about-us' },
	{ itemsId: generarId(), nombre: 'Actividades', url: '/activities' },
	{ itemsId: generarId(), nombre: 'Novedades', url: '/novedades' },
	{ itemsId: generarId(), nombre: 'Testimonios', url: '/testimonials' },
	{ itemsId: generarId(), nombre: 'Contacto', url: '/contact' },
	{ itemsId: generarId(), nombre: 'Contribuye', url: '/donar' },
]
export default function PublicHeader() {
	const [activePath, setActivePath] = useState('')

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

	const handleClick = () => {
		localStorage.clear()
	}
	return (
		<header className={`containerHeader ${width <= 842 ? 'reverse' : ''}`}>
			<div className="containerLogo">
				<img src={Logo} alt="logo" />
			</div>
			<SideBarPublic isOpen={btnResponsive} items={datos} />
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
						{isLogin ? (
							<Link to="/">
								<button onClick={handleClick}>Cerrar sesión</button>
							</Link>
						) : (
							<>
								<Link data-testid="button-register" to="/register">
									<button>Registrarse</button>
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
