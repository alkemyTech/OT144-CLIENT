import React from 'react'
import LazyLoadImages from '../LazyLoadImages/LazyLoadImages'
import ImgLinkedinColor from '../../../ImageProjects/linkedinColor.png'
import ImgSomosMas from '../../../ImageProjects/SomosMas.png'
import './stylesCardLinkedin.css'

function CardLinkedin() {
	return (
		<div className="cardLinkedin">
			<div className="titleLinkedin">
				<p>Linkedin</p>
				<LazyLoadImages
					src={ImgLinkedinColor}
					altText="Imagen logo Linkedin"
					classText="ImageLinkedinLogo"
				/>
			</div>
			<div className="imgSomosMas">
				<LazyLoadImages
					src={ImgSomosMas}
					altText="Imagen logo Somos Más"
					classText="ImageSomosMasLogo"
				/>
			</div>
			<div className="txtLinkedin">
				<p>
					<span>Somos Más Linkedin</span>
				</p>
				<p>Fundación Somos Más ONG</p>
				<a
					href="https://www.linkedin.com/in/somos-m%C3%A1s-fundacion-8a1427234/"
					target="blank"
				>
					Ver perfil
				</a>
			</div>
		</div>
	)
}

export default CardLinkedin
