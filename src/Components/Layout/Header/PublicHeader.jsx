import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "./LOGO-SOMOS MAS.png"
import "./PublicHeader.css"
import { isLogin } from '../../../Components/UI/Errors/UserNotLogged'

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

	const [activePath, setActivePath] = useState("")

	useEffect(() => {
		setActivePath(window.location.pathname)
	}, [activePath])

	const handleClick = () => {
		localStorage.clear()
	}

	return (
		<header className="containerHeader">
			<div className="containerLogo">
				<img src={Logo} alt="logo" />
			</div>
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
				{isLogin() ?
					<Link to="/"><button onClick={handleClick}>Cerrar sesión</button></Link>
					:
					<>
						<Link data-testid='button-register' to="/register"><button>Registrate</button></Link>
						<Link data-testid='button-login' to="/login"><button>Inicia sesión</button></Link>
					</>
				}
			</div>
		</header>
	)
}
