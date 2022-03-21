import './stylesAboutUs.css'
import TitleComponent from '../title/TitleComponent'

import { useDispatch } from 'react-redux'
import { getAboutUs } from '../../actions/usAboutActions'
import { useEffect } from 'react'

export default function AboutUs({ text }) {
	const dispatch = useDispatch()
	useEffect(() => {
		const textAdd = (text) => dispatch(getAboutUs(text))
		textAdd(text)
	}, [text])

	return (
		<div className="aboutUs-container">
			<TitleComponent text="Nosotros" />
			<h3 className="subtitle">Sobre nosotros</h3>
			<p>{text}</p>
		</div>
	)
}
