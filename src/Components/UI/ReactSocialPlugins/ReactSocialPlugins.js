import React from 'react'
import { TwitterTweet } from 'react-social-plugins'
import './stylesReactSocialPlugins.css'

function ReactSocialPlugins(){

  return(
    <section className='reactSocialPlugins'>
        <h1 className='title'>Último Tweet</h1>

        <div className='containerSocial'>
            <div className='imgSocial'>

            </div>
            
            <div className='containerTweet'>
                <TwitterTweet
                  align='left'
                  coversation='none'
                  tweetId='1502382821184348161'
                  theme='light'
                  width={325}
                /> 
            </div>   
        </div>          
    </section>
  )
}

export default ReactSocialPlugins