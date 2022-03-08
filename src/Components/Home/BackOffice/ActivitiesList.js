import { useState, useEffect } from "react";
import ErrorAlert from "../../UI/Alerts/ErrorAlert";
import SpinnerComponent from "../../UI/spinner/SpinnerComponent";
import ActivitiesTable from "./ActivitiesTable";
import { Link } from "react-router-dom";
import "../../TableStyles.css";
import "./ActivitiesList.css";

const ActivitiesList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("x"); //Acá va el GET
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

  const Activities = [
    {
      id: 1,
      name: "pepe",
      image: "https://placekitten.com/200/300",
      created_at: "dia1",
    },
    {
      id: 2,
      name: "jose",
      image: "https://placekitten.com/200/300",
      created_at: "dia2",
    },
    {
      id: 3,
      name: "josefa",
      image: "https://placekitten.com/200/300",
      created_at: "dia3",
    },
    {
      id: 4,
      name: "pepa",
      image: "https://placekitten.com/200/300",
      created_at: "dia4",
    },
  ];

  return (
    <main>
      <h1 className="headerTxt">Lista de Actividades</h1>
      <div className="main-action">
        <Link to="/backoffice/activities/create" className="btnAddTable">
          Crear nueva actividad
        </Link>
      </div>
      <ActivitiesTable activities={Activities} />
    </main>
  );
};

export default ActivitiesList;
