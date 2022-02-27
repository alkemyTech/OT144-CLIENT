
const ActivitiesContenct = ({data}) => {
  return (

    (data.map((activitie) => 
        <div>
            <div dangerouslySetInnerHTML={{__html: activitie }}></div>
        </div>  
    ))

  )
}

export default ActivitiesContenct