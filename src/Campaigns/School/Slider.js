import React from 'react'
import './stylesSliderComponent.css'
import Carousel from '../../Components/Carousel/Carousel'
import escolar1 from '../../ImageProjects/escolar1.jpg'
import escolar2 from '../../ImageProjects/escolar2.jpg'
import escolar3 from '../../ImageProjects/escolar3.jpg'

function Slider() {
	const sliderObj = [
		{
			image: escolar1,
			title: 'Actividades recreativas',
			description: 'Dar espacios para formentar la creatividad e imaginación',
		},
		{
			image: escolar2,
			title: 'Deportes al aire libre',
			description:
				'Ayuda en el desarrollo de capacidades como la percepción espacial, la coordinación, la agilidad y el equilibrio.',
		},
		{
			image: escolar3,
			title: 'Juegos en grupo',
			description:
				'Ayuda a superar la timidez y potencia las habilidades sociales',
		},
	]

	return (
		<div className="sliderComponent">
			<Carousel props={sliderObj} />
		</div>
	)
}

export default Slider
