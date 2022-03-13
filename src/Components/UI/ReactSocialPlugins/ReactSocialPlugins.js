import React from 'react';
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  LinkedinLogin,
  LinkedinAddProfile,
  LinkedinProfile,
  LinkedinShare,

  TwitterButton,
  TwitterTweet
} from 'react-social-plugins';

function ReactSocialPlugins(){
  return(
    <div>
      <LinkedinProfile
        lang="en_US"
        profileUrl="https://www.linkedin.com/in/somos-mas-fundacion-8a1427234/"
        format="inline" // Or "hover"
        text="Praveenkumar K" // text to show in "hover" format
      />

    </div>
  )
}

export default ReactSocialPlugins