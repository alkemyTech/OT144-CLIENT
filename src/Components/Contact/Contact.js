import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import TitleComponent from '../title/TitleComponent'
import { getContact } from '../../Services/ServiceAPIContact'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import img from './contacto.jpg'

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
		<div className="contact-container">
			<TitleComponent title="Contacto" img={img} nameImg="Contacto" />

			<ul className="contact-list">
				<li>
					{' '}
					Nombre:<span> {name} </span>{' '}
				</li>
				<li>
					{' '}
					Email: <span> {email} </span>
				</li>
				<li>
					{' '}
					Phone: <span> {phone} </span>{' '}
				</li>
			</ul>
			<div className="containerContactForm">
				<h3 className="subtitle">Contactanos</h3>
				<ContactForm />
			</div>
		</div>
	)
}

export default Contact
