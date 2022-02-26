import React from 'react'
import '../Components/CardListStyles.css'

const Card = (props) => {

  let member = {
    ...props.member
  }

  return (
    <div className="wrapper">
      <section className='card-container'>
        {
          member.image ? 
            <img src={member.image} alt={member.title} /> : 
            <img src={'/images/SomosMas.png'} alt={member.title}/>
        }
        { member.title ? <h1>{member.title}</h1> : <h1>Titulo de prueba</h1> }
        {
          member.description ? 
            <p>{member.description}</p> : 
            <p>Descripción de prueba. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error facilis commodi illum? asdasdasdasdasdas dasdasdas</p>
        }
        { 
          member.social ? 
            member.social.map((social, i) => {
              return (
                <a href={member.linkedinUrl} key={i} >
                  <img src={social} alt=""/>
                </a>
              )}) 
            :
            null
        }
      </section>
    </div>
  )
}

export default Card