import React, { useState, useEffect } from 'react'
import { getAllOrganizationData } from '../../Services/organizationService'
import ErrorAlert from '../../Components/UI/Alerts/ErrorAlert'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/facebook.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'
import './Footer.css'

const Footer = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const response = await getAllOrganizationData()
				setData(response.data.data)
			} catch (e) {
				return <ErrorAlert />
			}
		})()
	}, [])

	console.log(data)

	return (
		<div className="main-footer">
			<div className="container" id="landing">
				<div className="col col-1">
					<Link to="/" className="organizationName">
						{data.name}
					</Link>
					<img src={data.logo} alt="somos-mas-icon" />
				</div>
				<div className="col col-2" id="campaigns">
					<h3 className="subtitle">Otras campañas</h3>
					<ul className="other-campaigs">
						<li>
							<Link to="/toys-campaign" target="_blank" rel="noreferrer">
								Campaña de juguetes
							</Link>
						</li>
					</ul>
				</div>
				<div className="col col-3">
					<ul className="social-media">
						<li>
							<a
								target="_blank"
								href="http://www.facebook.com"
								rel="noreferrer"
							>
								<img src={FacebookIcon} />
								<p className="socialText">facebook/</p>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.instagram.com"
								rel="noreferrer"
							>
								<img src={InstagramIcon} />
								<p className="socialText">instagram/</p>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.linkedin.com"
								rel="noreferrer"
							>
								<img src={LinkedinIcon} />
								<p className="socialText">linkedin/</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="rights-reserved">
				<p>
					&copy;{new Date().getFullYear()} SOMOS MÁS | All rights reserved |
					Terms Of Service | Privacy
				</p>
			</div>
		</div>
	)
}

export default Footer
