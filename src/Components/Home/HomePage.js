import React, { useEffect, useState } from "react";
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import ErrorAlert from "../UI/Alerts/ErrorAlert";
import "./stylesHomePage.css";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch("x"); // Acá va el GET a la API
        setData(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    doFetchData();
  }, []);

  if (loading) {
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
