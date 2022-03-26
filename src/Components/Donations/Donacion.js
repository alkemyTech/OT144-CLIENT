import React from 'react'
import LayoutPublic from '../Layout/LayoutPublic'
import './stylesDonacion.css'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import imgDonaciones from '../../ImageProjects/donaciones.jpeg'

function Donacion() {
	return (
		<LayoutPublic>
			<section className="donacion">
				<PresentationPage
					title="Donaciones"
					subtitle="FUNDACIÓN SOMOS MAS"
					img={imgDonaciones}
					nameImg="Imagen Donaciones"
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
