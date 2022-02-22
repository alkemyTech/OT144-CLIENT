

const TitleComponent = ({text , img, nameImg}) => {

    

  return (
    <div>
        <div
            className="title"
        >{text}
        </div>
        <img
            className="title--img" 
            src={img}
            alt={nameImg}
        />
    </div>
  )
}
TitleComponent.defaultProps = {
    text: 'Tu titulo',
    img: 'https://image.shutterstock.com/image-vector/volunteer-day-design-hand-heart-260nw-2083207180.jpg',
    nameImg: 'Volunteer Day'
}

export default TitleComponent