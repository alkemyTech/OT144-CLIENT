import React from 'react'
import './stylesDonacion.css'

function Donacion(props) {
	return (
		<section className="donacion">
			<p className="bodyTxt">{props.data}</p>
			<button className="submit-btn">Mercado Pago</button>
		</section>
	)
}

export default Donacion
