import React, { useEffect, useState } from "react";
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import ErrorAlert from "../UI/Alerts/ErrorAlert";
import "./stylesHomePage.css";
import { getSlides } from "../../Services/slidesService";
import HeaderComponent from "./BackOffice/HeaderComponent";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await Promise.allSettled([
          getSlides("/slides"),
          //getNews("/news"),
        ]);
        setData(
          response.map((res) => {
            if ((res.status = "fulfilled")) {
              return res.value;
            }
            return null;
          })
        );
        setLoading(false);
      } catch (e) {
        ErrorAlert();
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <SpinnerComponent loading={true} />
      </div>
    );
  }

  return (
    <main className="homePage">

      <HeaderComponent />

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