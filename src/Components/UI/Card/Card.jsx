import React from 'react'
import './CardListStyles.css'
import ImageLinkedin from "../../../assets/linkedin.svg"
import ImageFacebook from "../../../assets/facebook.svg";

const Card = (props) => {

  let cardItem = {
    ...props.cardItem
  }

  return (
    <div className="wrapper">
      <section className='card-container'>
        {
          cardItem.image ?
            <img src={cardItem.image} alt={cardItem.title} /> :
            <img src={'/images/SomosMas.png'} alt={cardItem.title}/>
        }
        { cardItem.title ? <h1>{cardItem.title}</h1> : <h1>Titulo de prueba</h1> }
        {
          cardItem.description ?
            <p>{cardItem.description}</p> :
            <p>Descripción de prueba. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error facilis commodi illum? asdasdasdasdasdas dasdasdas</p>
        }
        <section className='social'>
        { 
        cardItem.facebookUrl &&
          <a href={cardItem.facebookUrl}>
            <img src={ImageFacebook} alt="" />
          </a>
        }
        {
          cardItem.linkedinUrl &&
            <a href={cardItem.linkedinUrl}>
              <img src={ImageLinkedin} alt="" />
            </a>
        }
        </section>
      </section>
    </div>
  )
}

export default Card