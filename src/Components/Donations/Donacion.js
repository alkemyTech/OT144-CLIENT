import React, { useEffect } from 'react'
import './stylesDonacion.css'
import { useNavigate } from 'react-router-dom'

function Donacion(props) {
	const navigate = useNavigate()

	useEffect(() => {
		const isLogin = JSON.parse(localStorage.getItem('token'))
			? [JSON.parse(localStorage.getItem('token'))]
			: []
		if (Object.keys(isLogin).length === 0) {
			navigate('/')
		}
	}, [])

	return (
		<section className="donacion">
			<p className="bodyTxt">{props.data}</p>
			<button className="submit-btn">Mercado Pago</button>
		</section>
	)
}

export default Donacion
