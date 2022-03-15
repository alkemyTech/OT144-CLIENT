import React from 'react';
import { TwitterTweet } from 'react-social-plugins';

function ReactSocialPlugins(){

  return(
    <div>
        <TwitterTweet
          align='left'
          coversation='none'
          tweetId='1502382821184348161'
          theme='light'
          width={325}
        />              
    </div>
  )
}

export default ReactSocialPlugins