import React from 'react'
import { TwitterTweet } from 'react-social-plugins'
import './stylesReactSocialPlugins.css'
import ImgTwitter from '../../../ImageProjects/twitter.png'
import ImgFacebook from '../../../ImageProjects/facebook.png'
import LazyLoadImages from '../LazyLoadImages/LazyLoadImages'

function ReactSocialPlugins(){

  return(
    <section className='reactSocialPlugins'>
        <h1 className='title'>Último Tweet</h1>

        <div className='containerSocial'>

            <div className='containerTweet'>
                <TwitterTweet
                  align='left'
                  coversation='none'
                  tweetId='1502382821184348161'
                  theme='light'
                  width={325}
                /> 
            </div>   

            <div className='imgSocial'>
                <a href='https://www.linkedin.com/in/somos-m%C3%A1s-fundacion-8a1427234/' target='blank'>
                  <LazyLoadImages src={ImgFacebook} altText='Imagen logo Facebook' classText='ImageSocial'/>
                </a>
                <a href='https://twitter.com/SomosMasONGF' target='blank'>
                  <LazyLoadImages src={ImgTwitter} altText='Imagen logo Twitter' classText='ImageSocial'/>
                </a>
            </div>
        </div>          
    </section>
  )
}

export default ReactSocialPlugins