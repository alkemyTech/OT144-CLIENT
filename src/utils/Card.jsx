import React from 'react'
import '../Components/CardListStyles.css'
const Card = ({title, image, description}) => {

  return (
    <div className="wrapper">
      <div className='card-container'>
        {image ? <img src={image} alt={title} /> : 
        <img src={'/images/SomosMas.png'} alt={title}/>}
        {title ? <h1>{title}</h1> : <h1>Titulo de prueba</h1>}
        {description ? <p>{description}</p> : 
        <p>Descripción de prueba. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error facilis commodi illum? asdasdasdasdasdas dasdasdas</p>}
      </div>
    </div>
  )
}

export default Card