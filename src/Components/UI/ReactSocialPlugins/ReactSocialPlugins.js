import React from 'react'
import { TwitterTweet } from 'react-social-plugins'
import './stylesReactSocialPlugins.css'
import ImgTwitter from '../../../ImageProjects/twitter.png'
import ImgLinkedin from '../../../ImageProjects/linkedin.png'
import LazyLoadImages from '../LazyLoadImages/LazyLoadImages'
import CardLinkedin from './CardLinkedin'

function ReactSocialPlugins() {
	return (
		<section className="reactSocialPlugins">
			<h1 className="titleRedes">Nuestras Redes</h1>

			<div className="containerSocial">
				<div className="containerRedes">
					<div className="containerTweet">
						<TwitterTweet
							align="center"
							coversation="none"
							tweetId="1502382821184348161"
							theme="light"
							width={325}
						/>
					</div>
					<CardLinkedin />
				</div>

				<div className="imgSocial">
					<a
						href="https://www.linkedin.com/in/somos-m%C3%A1s-fundacion-8a1427234/"
						target="blank"
					>
						<LazyLoadImages
							src={ImgLinkedin}
							altText="Imagen logo Linkedin"
							classText="ImageSocial"
						/>
					</a>
					<a href="https://twitter.com/SomosMasONGF" target="blank">
						<LazyLoadImages
							src={ImgTwitter}
							altText="Imagen logo Twitter"
							classText="ImageSocial"
						/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default ReactSocialPlugins
