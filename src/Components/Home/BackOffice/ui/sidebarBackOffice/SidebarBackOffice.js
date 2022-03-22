import React from 'react'
import './sidebarBackOffice.css'
import SidebarItemsNav from './SidebarItemsNav'
import organization from '../../../../../assets/organizationchart_116388.svg'
import slides from '../../../../../assets/slides.svg'
import user from '../../../../../assets/user.svg'
import members from '../../../../../assets/members.svg'
import categories from '../../../../../assets/categories.svg'
import backoffice from '../../../../../assets/BACKOFFICE.svg'
import news from '../../../../../assets/news.svg'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../../../actions/auth'
import { useHistory } from 'react-router-dom'

const SidebarBackOffice = ({ isOpen }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const generarId = () => {
		const random = Math.random().toString(36)
		const fecha = Date.now().toString(36)
		return random + fecha
	}

	const items = [
		{
			itemsId: generarId(),
			nombre: 'Inicio',
			url: '/backoffice',
			img: `${backoffice}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Editar Organización',
			url: '/backoffice/organization/edit',
			img: `${organization}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Slider',
			url: '/backoffice/slides',
			img: `${slides}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Editar Diapositivas Acción',
			url: '/backoffice/slides/:action',
			img: `${slides}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Usuarios',
			url: '/backoffice/users',
			img: `${user}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Miembros',
			url: '/backoffice/members',
			img: `${members}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Editar Miembros',
			url: '/backoffice/members/edit',
			img: `${members}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Categorias',
			url: '/backoffice/categories',
			img: `${categories}`,
		},
		{
			itemsId: generarId(),
			nombre: 'Novedades',
			url: '/backoffice/news',
			img: `${news}`,
		},
	]

	const handleLogOut = async () => {
		await dispatch(startLogout())
		history.push('/')
	}

	return (
		<div
			className={`SideBarMenu ${isOpen ? 'expanded' : 'collapsed'}`}
		>
			{items.map((item) => (
				<SidebarItemsNav isOpen={isOpen} key={item.itemsId} item={item} />
			))}
			<button className="btn-logout" onClick={handleLogOut}>
				Cerrar sesión
			</button>
		</div>
	)
}

export default SidebarBackOffice
