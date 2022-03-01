import ActivitiesTable from "./ActivitiesTable";
import { Link } from "react-router-dom";
import "../../TableStyles.css";
import "./ActivitiesList.css";

const ActivitiesList = () => {
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
