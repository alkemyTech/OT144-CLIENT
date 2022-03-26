import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import TitleComponent from '../title/TitleComponent'
import { getContact } from '../../Services/ServiceAPIContact'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import img from './contacto.jpg'
import LayoutPublic from '../Layout/LayoutPublic'
import ContactMap from './ContactMap'

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
				<TitleComponent title="Contacto" img={img} nameImg="Contacto" />
				<div className="containerContactForm">
					<h3 className="subtitle">Contactanos</h3>
					<ContactForm />
				</div>
				<ContactMap />
			</div>
		</LayoutPublic>
	)
}

export default Contact
