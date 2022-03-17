import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import './TermsAndConditions.css'
import ReadPDF from './ReadPDF'

const TermsAndConditions = (data) => {
	const [isData, setIsData] = useState(data)

	useEffect(() => {
		setIsData(data)
	})

	// eslint-disable-next-line no-unused-vars
	const sendData = () => {
		console.log('state', isData)
		alert('data enviada')
	}

	return (
		<Popup
			trigger={<p className="terms-and-cond">Leer terminos y condiciones</p>}
			modal
			nested
		>
			{(close) => (
				<div className="container-modal">
					<div className="modal">
						<button className="close" onClick={close}>
							&times;
						</button>
						<div className="header"> Terminos y condiciones </div>
						<div className="content">
							<ReadPDF />
						</div>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default TermsAndConditions
