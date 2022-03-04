import React from "react";
import Table from "../UI/Table"
import { Link } from "react-router-dom";
export default function SlidesList() {
  return (
    <div>
      <Table
        header={{
          title: "Listado Slides",
          button: () => (
            <Link to="/backoffice/Slides/create">
              <button className="btnAddTable">Crear Slide</button>
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
          actions: ({}) => (
            <td >
              <button className="btnUpdateTable">Editar</button>
              <button className="btnDeleteTable">Eliminar</button>
            </td>
          ),
        }}
        data={[
          {
            name: "Maria",
            email: "gfalotioc123@gmail.com",
            order: 13,
            image: "https://picsum.photos/200/300",
          },
          {
            name: "Maria",
            email: "gfalotioc123@gmail.com",
            order: 1,
            image:
              "https://images.unsplash.com/photo-1609591281156-3ca8c3836c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
          {
            name: "Maria",
            email: "gfalotioc123@gmail.com",
            order: 23,
            image:
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          },
        ]}
      />
    </div>
  );
}
