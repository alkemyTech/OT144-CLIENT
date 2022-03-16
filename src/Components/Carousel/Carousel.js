import React, { useState } from 'react'
import './Carousel.css'
import BtnSlider from './BtnSlider'

const Carousel = ({ props }) => {
	const [slideIndex, setSlideIndex] = useState(1)

	const nextSlide = () => {
		if (slideIndex !== props.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === props.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(props.length)
		}
	}

	return (
		<div className="container-slider">
			{props.map((obj, index) => {
				return (
					<div
						key={obj.title}
						className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
					>
						<h1 className="title">{obj.title}</h1>
						<p className="description">{obj.description}</p>
						<img src={obj.image} alt={obj.title} />
					</div>
				)
			})}
			<BtnSlider moveSlide={nextSlide} direction={'next'} />
			<BtnSlider moveSlide={prevSlide} direction={'prev'} />
		</div>
	)
}

export default Carousel
