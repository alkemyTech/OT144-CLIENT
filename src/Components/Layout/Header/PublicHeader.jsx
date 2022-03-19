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
	const [isLoginRegister, setIsLoginRegister] = useState(false)

	useEffect(()=>{
		setActivePath(window.location.pathname)
	},[activePath])

	useEffect(
		() => {
			if (isLogin === true) {
				setIsLoginRegister(true)
			}
		},
		[]
	)

	return (
		<header className="containerHeader">
			<div className="containerLogo">
				<img src={Logo} alt="logo" />
			</div>
			<nav className="containerHeaderNav">
				<ul>

					{datos.map((dato, index) => (
						<>
							{console.log(activePath)}
							{console.log(dato.url)}
							<li
								key={`${dato.nombre}${index}`}
								id={dato.url === activePath ? 'activePath' : null}
							>
								<Link to={dato.url}>{dato.nombre}</Link>
							</li>
						</>
					))}
				</ul>
			</nav>
			<div className="containerHeaderButtons">
				{!isLoginRegister ?
					<Link to="/register"><button>Registrate</button></Link> :
					<Link to="/login"><button>Inicia sesión</button></Link>
				}
			</div>
		</header>
	)
}
