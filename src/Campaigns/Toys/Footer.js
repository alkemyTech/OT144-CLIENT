import { useState, useEffect } from 'react'
import ErrorAlert from '../../Components/UI/Alerts/ErrorAlert'
import { getAllOrganizationData } from '../../Services/organizationService'
import { Link } from 'react-router-dom'
import './Footer.css'
import FacebookIcon from '../../assets/facebook.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'

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

	return (
		<div className="main-footer">
			<div className="container">
				<div className="col col-1">
					<Link to="/" target="_blank" className="text-data">
						{data.name}
					</Link>
				</div>
				<div className="col col-2">
					<img src={data.logo} alt="somos-mas-icon" />
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
								<p className="social-media-text">@somos mas</p>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.instagram.com"
								rel="noreferrer"
							>
								<img src={InstagramIcon} />
								<p className="social-media-text">@somos mas</p>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.linkedin.com"
								rel="noreferrer"
							>
								<img src={LinkedinIcon} />
								<p className="social-media-text">@somos mas</p>
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
