import React, { useEffect, useState } from "react";
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
    return <p>loading...</p>; // Acá va el spinner!
  }

  if (error) {
    return (
      // Acá va el Alert Error!
      <div>
        <p>Error!!!</p>
        <p>{error.message}</p>
      </div>
    );
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
