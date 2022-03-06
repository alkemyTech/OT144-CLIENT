import { useEffect, useState } from "react";
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import ErrorAlert from "../UI/Alerts/ErrorAlert";
import AboutUs from "./AboutUs";
import "./stylesAboutUs.css";

export default function AboutPrincipal() {
  const [state, setState] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const { loading, data, error } = state;

  const principalText =
    "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. ﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.";

  useEffect(() => {
    const doFetchData = async () => {
      setState({
        loading: true,
        data: [],
        error: null,
      });
      try {
        const data = await fetch("x"); // Acá va el GET a la API
        setState({
          loading: false,
          data: data,
          error: null,
        });
      } catch (e) {
        setState({
          loading: false,
          data: [],
          error: e.message,
        });
      }
    };
    doFetchData();
  }, []);

  if (loading === true) {
    return (
      <div className="spinner-container">
        <SpinnerComponent loading={true} />
      </div>
    );
  }

  if (error) {
    return <ErrorAlert />;
  }
  return (
    <main className="aboutPrincipal-container">
      <AboutUs text={principalText} />
    </main>
  );
}
