import TitleComponent from "../../title/TitleComponent";
import { useParams } from "react-router";
import { useState } from "react";
import "./stylesActivity.css"

export default function ActivitiesDetail(){

    const { id } = useParams();
    /* En el estado activity se va a guardar la informacion de la actividad buscandola 
    mediante el id */
    const [activity, setActivity] = useState({
        "id":1352,
        "name":"Actividad",
        "slug":null,
        "description":"Descripcion",
        "image":"http:\/\/ongapi.alkemy.org\/storage\/RVaOs4LmMs.jpeg",
        "user_id":null,
        "category_id":null,
        "created_at":"2022-02-20T20:30:08.000000Z",
        "updated_at":"2022-02-20T20:30:08.000000Z",
        "deleted_at":null,
        "group_id":36
    })

    return(
        <section className="containerActivity">
            <TitleComponent text={activity.name} img={activity.image}/>
            <p>{activity.description}</p>
        </section>
    )
}