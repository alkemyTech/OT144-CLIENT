import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItemsNav from './BackOffice/ui/sidebarBackOffice/SidebarItemsNav'

const generarId = () => {
	const random = Math.random().toString(36)
	const fecha = Date.now().toString(36)
	return random + fecha
}

const SideBar = ({ isOpen }) => {
	const items = [
		{ itemsId: generarId(), nombre: 'Inicio', url: '/' },
		{ itemsId: generarId(), nombre: 'Nosotros', url: '/about-us' },
		{ itemsId: generarId(), nombre: 'Actividades', url: '/activities' },
		{ itemsId: generarId(), nombre: 'Novedades', url: '/novedades' },
		{ itemsId: generarId(), nombre: 'Testimonios', url: '/testimonials' },
		{ itemsId: generarId(), nombre: 'Contacto', url: '/contact' },
		{ itemsId: generarId(), nombre: 'Contribuye', url: '/donar' },
	]
	return (
		<div className={`SideBarMenu ${isOpen ? 'expanded' : 'collapsed'}`}>
			{items.map((item) => (
				<SidebarItemsNav isOpen={isOpen} key={item.itemsId} item={item} />
			))}
			<Link className="btn-logout" to="/login">
				Iniciar sesión
			</Link>
			<Link className="btn-logout" to="/register">
				Cerrar sesión
			</Link>
		</div>
	)
}

export default SideBar
