import { NavLink } from 'react-router-dom'
import organization from '../../../../../assets/organization_.svg'
import slides from '../../../../../assets/slides.svg'
import user from '../../../../../assets/user.svg'
import members from '../../../../../assets/members.svg'
import categories from '../../../../../assets/categories.svg'
import backoffice from '../../../../../assets/BACKOFFICE.svg'
import news from '../../../../../assets/news.svg'
import { classNames } from './classes.js'
import './sidebarBackOffice.css'

// eslint-disable-next-line
const SidebarItemsNav = ({ isOpen }) => {
	// eslint-disable-next-line
	const imgIcon = ' img-icon-d'
	return (
		<div className="SideBarMenuItem">
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={backoffice}
							alt="backoffice"
						/>
					</div>
					<span className="label">Backoffice</span>
					{!isOpen ? <div className="tooltip">BACKOFFICE</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/organization"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={organization}
							alt="organization"
						/>
					</div>
					<span className="label">Organización</span>
					{!isOpen ? <div className="tooltip">ORGANIZACIÓN</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/organization/edit"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={organization}
							alt="organization"
						/>
					</div>
					<span className="label">Editar Organización</span>
					{!isOpen ? <div className="tooltip">EDITAR ORGANIZACIÓN</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/organization/edit-home"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={organization}
							alt="organization"
						/>
					</div>
					<span className="label">Editar Organización Home</span>
					{!isOpen ? (
						<div className="tooltip">EDITAR ORGANIZACIÓN HOME</div>
					) : (
						''
					)}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/slides"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={slides}
							alt="slides"
						/>
					</div>
					<span className="label">Diapositivas</span>
					{!isOpen ? <div className="tooltip">DIAPOSITIVAS</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/slides/:action"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={slides}
							alt="slides"
						/>
					</div>
					<span className="label">Editar Diapositivas Acción</span>
					{!isOpen ? (
						<div className="tooltip">EDITAR DIAPOSITIVAS ACCIÓN</div>
					) : (
						''
					)}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/users"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={user}
							alt="user"
						/>
					</div>
					<span className="label">Usuarios</span>
					{!isOpen ? <div className="tooltip">USUARIOS</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/members"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={members}
							alt="members"
						/>
					</div>
					<span className="label">Miembros</span>
					{!isOpen ? <div className="tooltip">MIEMBROS</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/members/edit"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={members}
							alt="members"
						/>
					</div>
					<span className="label">Editar Miembros</span>
					{!isOpen ? <div className="tooltip">EDITAR MIEMBROS</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/categories"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={categories}
							alt="categories"
						/>
					</div>
					<span className="label">Categorias</span>
					{!isOpen ? <div className="tooltip">CATEGORIAS</div> : ''}
				</div>
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-link"
				exact
				to="/backoffice/news"
			>
				<div className={classNames('itemContent', isOpen ? '' : ' collapsed')}>
					<div className="icon">
						<img
							className={classNames(isOpen ? ' img-icon' : imgIcon)}
							src={news}
							alt="news"
						/>
					</div>
					<span className="label">Categorias</span>
					{!isOpen ? <div className="tooltip">CATEGORIAS</div> : ''}
				</div>
			</NavLink>
		</div>
	)
}

export default SidebarItemsNav
