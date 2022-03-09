import React, { useState, useEffect } from "react";
import Table from "../UI/Table";
import { Link } from "react-router-dom";
import { getSlides, deleteSlide } from '../../Services/slidesService'


export default function SlidesList() {

  const [slidesData, setSlidesData] = useState([])
  const [count, setCount] = useState(0)


  useEffect(
    ()=>{

      const cast = async () => {
        try{
            const response = await Promise.resolve(getSlides())
            return ( setSlidesData(response.data.data) )
        }catch(error) {
          return {
            status: error.response.status,
            error: error.message,
            data: error.response.data,
          }
        }  
      }

      cast()
    },
    [count]
  )

  const handleClickDelete = async (id) => {
    setCount(count + 1)
    try{
      const response = await Promise.resolve(deleteSlide(id))
      return {
        status: response.status,
        data: response.data
      }
    }catch(error) {
      return {
        status: error.response.status,
        error: error.message,
        data: error.response.data,
      }
    }
  }

  return (
    <div>
      <Table
        header={{
          title: "Listado Slides",
          button: () => (
            <Link to="/backoffice/slides/create">
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
              <Link to="/backoffice/slides/edit">
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