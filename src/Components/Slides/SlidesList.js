import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import ErrorAlert from "../UI/Alerts/ErrorAlert";
import Table from "../UI/Table";
import { getSlides } from "../../Services/slidesService";
import { store } from "../../app/store";
import { getSliderActions } from "../../actions/slider";

export default function SlidesList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await getSlides();
        store.dispatch(getSliderActions(response.data.data));
        setData(response.data.data);
      } catch (e) {
        return <ErrorAlert />;
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <SpinnerComponent loading={true} />;
  }

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
            <td>
              <button className="btnUpdateTable">Editar</button>
              <button className="btnDeleteTable">Eliminar</button>
            </td>
          ),
        }}
        data={data}
      />
    </div>
  );
}
