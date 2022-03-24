import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItemsNav from './BackOffice/ui/sidebarBackOffice/SidebarItemsNav'

const SideBar = ({ isOpen, items }) => {
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
