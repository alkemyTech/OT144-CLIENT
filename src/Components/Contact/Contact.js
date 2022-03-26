import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import { getContact } from '../../Services/ServiceAPIContact'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import LayoutPublic from '../Layout/LayoutPublic'
import PresentationPage from '../UI/PresentationPage/PresentationPage'
import imgContacto from '../../ImageProjects/contacto.jpeg'

const Contact = ({ name, phone, email }) => {
	const [error, setError] = React.useState(false)

	React.useEffect(async () => {
		try {
			await getContact()
		} catch (error) {
			setError(true)
		}
	}, [])

	if (error) {
		return <ErrorAlert />
	}

	return (
		<LayoutPublic>
			<div className="contact-container">
				<PresentationPage
					title="Contacto"
					subtitle="FUNDACIÓN SOMOS MAS"
					img={imgContacto}
					nameImg="Imagen Contacto"
				/>
				<div className="containerContactForm">
					<h3 className="titleContacto">Contactanos</h3>
					<ContactForm />
				</div>
			</div>
		</LayoutPublic>
	)
}

export default Contact
