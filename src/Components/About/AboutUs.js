import './stylesAboutUs.css'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import { useDispatch } from 'react-redux'
import { getAboutUs } from '../../actions/usAboutActions'
import { useEffect } from 'react'
import imgNosotros from '../../ImageProjects/nosotros.jpeg'

export default function AboutUs({ text }) {
	const dispatch = useDispatch()
	useEffect(() => {
		const textAdd = (text) => dispatch(getAboutUs(text))
		textAdd(text)
	}, [text])

	return (
		<div className="aboutUs-container">
			<PresentationPage
				title="Nosotros"
				subtitle="FUNDACIÓN SOMOS MAS"
				img={imgNosotros}
				nameImg="Imagen Nosotros"
			/>
			<div className="containerTxtAbout">
				<p className="about-text">{text}</p>
			</div>
		</div>
	)
}
