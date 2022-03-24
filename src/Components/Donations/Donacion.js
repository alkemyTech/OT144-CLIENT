import React from 'react'
import LayoutPublic from '../Layout/LayoutPublic'
import TitleComponent from '../title/TitleComponent'
import './stylesDonacion.css'
import img from './donaciones.jpg'

function Donacion(props) {
	return (
		<LayoutPublic>
			<section className="donacion">
				<TitleComponent
					title="Tu ayuda hace la diferencia"
					img={img}
					nameImg="donacion"
				/>
				<p>
					Sumate como voluntario a la formación de ciudadanos comprometidos con
					su comunidad. Necesitamos de tu colaboración para que cada vez más
					niños, niñas y jóvenes alcancen su pleno desarrollo y se involucren en
					las problemáticas de su comunidad.
				</p>
				<button className="submit-btn">Mercado Pago</button>
			</section>
		</LayoutPublic>
	)
}

export default Donacion
