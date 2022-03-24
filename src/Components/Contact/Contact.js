import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import { getContact } from '../../Services/ServiceAPIContact'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import LayoutPublic from '../Layout/LayoutPublic'

const Contact = ({ img, name, phone, email }) => {
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
				<h3 className="subtitle">Contactanos</h3>
				<ContactForm />
			</div>
		</LayoutPublic>
	)
}

export default Contact
