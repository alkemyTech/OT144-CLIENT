import { NavLink } from 'react-router-dom'
import { classNames } from './classes.js'
import './sidebarBackOffice.css'

const SidebarItemsNav = ({ isOpen, item }) => {
	return (
		<div className="SideBarMenuItem">
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to={item.url}
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : ' img-icon-d')}
							src={item.img}
							alt={item.nombre}
						/>
					</div>
					<span className="label">{item.nombre}</span>
					{!isOpen ? <div className="tooltip">{item.nombre}</div> : ''}
				</div>
			</NavLink>
		</div>
	)
}

export default SidebarItemsNav
