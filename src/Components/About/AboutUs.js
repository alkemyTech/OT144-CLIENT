import './stylesAboutUs.css'
import TitleComponent from '../title/TitleComponent'

import { useDispatch } from 'react-redux'
import { getAboutUs } from '../../actions/usAboutActions'
import { useEffect } from 'react'
import img from './equipo.jpg'

export default function AboutUs({ text }) {
	const dispatch = useDispatch()
	useEffect(() => {
		const textAdd = (text) => dispatch(getAboutUs(text))
		textAdd(text)
	}, [text])

	return (
		<div className="aboutUs-container">
			<TitleComponent title="Nosotros" img={img} nameImg="equipo" />
			<p className="about-text">{text}</p>
		</div>
	)
}
