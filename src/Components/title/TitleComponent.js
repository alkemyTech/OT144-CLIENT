

const TitleComponent = ({title , img, nameImg}) => {

  const image = "./logo-somos_mas.png"
  return (
    <div className="container-title">
        <h2 className="title">
        {title}
        </h2>
        <img
            className="title--img" 
            src={img}
            alt={nameImg}
        />
    </div>
  )
}
TitleComponent.defaultProps = {
    title: 'Tu titulo',
    img: "./logo-somos_mas.png",
    nameImg: 'logo-somos-mas'
}

export default TitleComponent