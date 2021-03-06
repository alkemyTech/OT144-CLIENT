import React, { useState } from 'react'
import './Carousel.css'
import BtnSlider from './BtnSlider'
import { Link } from 'react-router-dom'

const Carousel = ({ slides }) => {
	const [slideIndex, setSlideIndex] = useState(1)

	setTimeout(() => {
		nextSlide()
	}, 5000)

	const nextSlide = () => {
		if (slideIndex !== slides.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === slides.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(slides.length)
		}
	}

	return (
		<div className="container-slider">
			{slides.map((obj, index) => {
				return (
					<div
						key={index}
						className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
					>
						<div className="imgSlider">
							<img src={obj.image} alt={obj.title} />
						</div>
						<div className="txtSlider">
							<Link to={`/slides/${obj.id}`}>
								<h1>{obj.name}</h1>
								<div
									className="txtSlider-description"
									dangerouslySetInnerHTML={{ __html: obj.description }}
								></div>
							</Link>
						</div>
					</div>
				)
			})}
			<BtnSlider moveSlide={nextSlide} direction={'next'} />
			<BtnSlider moveSlide={prevSlide} direction={'prev'} />
		</div>
	)
}

export default Carousel
