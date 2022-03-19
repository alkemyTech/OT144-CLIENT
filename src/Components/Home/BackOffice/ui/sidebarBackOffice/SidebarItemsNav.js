import organization from '../../../../../assets/organizationchart_116388.svg'
import slides from '../../../../../assets/slides.svg'
import user from '../../../../../assets/user.svg'
import members from '../../../../../assets/members.svg'
import categories from '../../../../../assets/categories.svg'
import backoffice from '../../../../../assets/BACKOFFICE.svg'
import news from '../../../../../assets/news.svg'
import { classNames } from './classes.js'
import './sidebarBackOffice.css'
import { NavLink } from 'react-router-dom'

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
