import React, { useState } from 'react'
import './Carousel.css'
import BtnSlider from './BtnSlider'

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
						key={obj.title}
						className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
					>
						<div className="imgSlider">
							<img src={obj.image} alt={obj.title} />
						</div>
						<div className="txtSlider">
							<h1>{obj.title}</h1>
							<p>{obj.description}</p>
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
