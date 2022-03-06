import React, { useState, useEffect } from "react";
import Table from "../UI/Table";
import { Link } from "react-router-dom";
import { getSlides, deleteSlide } from '../../Services/slidesService'


export default function SlidesList() {

  const [slidesData, setSlidesData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(
    ()=>{
      getSlides()
      var cast = Promise.resolve(getSlides())
      cast.then(res => {
        console.log('data', res.data)
        if(res.data){
          setSlidesData(res.data.data)
        }
      })
      .catch(error => {
        console.log(error.message)
      })  
    },
    [count]
  )

  const handleClickDelete = (id) => {
    deleteSlide(id)
    setCount(count + 1)
  }

  return (
    <div>
      <Table
        header={{
          title: "Listado Slides",
          button: () => (
            <Link to="/backoffice/create-slide">
              <button className="btnAddTable" >Crear Slide</button>
            </Link>
          ),
        }}
        fields={["Titulo", "Imagen", "Order", "Acciones"]}
        scopedSlots={{
          title: ({ name }) => <td>{name}</td>,
          image: ({ image, name }) => (
            <td>
              <img src={image} alt={name + " foto"} />
            </td>
          ),
          order: ({ order }) => (
            <td>
              <h1>{order}</h1>
            </td>
          ),
          actions: ({ id }) => (
            <td>
              <Link to="/backoffice/create-slide">
                <button className="btnUpdateTable">Editar</button>
              </Link>
              <button className="btnDeleteTable" onClick={ () => handleClickDelete(id) }>Eliminar</button>
            </td>
          ),
        }}
        data={slidesData}
      />
    </div>
  );
}