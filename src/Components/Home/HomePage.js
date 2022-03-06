import React, { useEffect, useState } from "react";
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import ErrorAlert from "../UI/Alerts/ErrorAlert";
import "./stylesHomePage.css";

function HomePage() {
  const [state, setState] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const { loading, data, error } = state;

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
    <main className="homePage">
      <section className="containerSlider">
        <h2>Aqui va el componente Slider</h2>
      </section>

      <section className="containerNovedades">
        <h2>Aqui va el componente Novedades</h2>
      </section>
    </main>
  );
}

export default HomePage;
