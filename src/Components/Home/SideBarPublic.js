import React from 'react'
import { Link } from 'react-router-dom'
import { isLogin } from '../UI/Errors/UserNotLogged'
import SidebarItemsNav from './BackOffice/ui/sidebarBackOffice/SidebarItemsNav'

const SideBar = ({ isOpen, items }) => {
	const handleClick = () => {
		localStorage.clear()
	}
	return (
		<div className={`SideBarMenu ${isOpen ? 'expanded' : 'collapsed'}`}>
			{items.map((item) => (
				<SidebarItemsNav isOpen={isOpen} key={item.itemsId} item={item} />
			))}
			{isLogin === true ? (
				<Link to="/" className="btn-logout">
					<button onClick={handleClick} className="button-unset">
						Cerrar sesión
					</button>
				</Link>
			) : (
				<>
					<Link className="btn-logout" to="/login">
						Iniciar sesión
					</Link>
					<Link className="btn-logout" to="/register">
						Registrarse
					</Link>
				</>
			)}
		</div>
	)
}

export default SideBar
