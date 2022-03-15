import React,{ useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "./LOGO-SOMOS MAS.png"
import "./PublicHeader.css"
import { isLogin } from '../../../Components/UI/Errors/UserNotLogged'

export default function PublicHeader() {
	const datos = [
		{ nombre: "Inicio", url: "/" },
		{ nombre: "Nosotros", url: "/about-us" },
		{ nombre: "Actividades", url: "/activities" },
		{ nombre: "Novedades", url: "/novedades" },
		{ nombre: "Testimonios", url: "" },
		{ nombre: "Contacto", url: "/contact" },
	]

	const [isLoginRegister, setIsLoginRegister] = useState(false)

	useEffect(
		()=>{
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
						<li key={`${dato.nombre}${index}`} id={dato.url === window.location.pathname ? "activePath" : null}>
							<Link to={dato.url} >{dato.nombre}</Link>
						</li>
					))
					}
				</ul>
			</nav>
			<div className="containerHeaderButtons">
				{isLoginRegister &&
					<Link to="/donar"><button className="btnDonar">Donar</button></Link>
				}
				<Link to="/login"><button>Inicia sesión</button></Link>
				{!isLoginRegister &&
					<Link to="/register"><button>Registrate</button></Link>
				}
			</div>
		</header>
	)
}