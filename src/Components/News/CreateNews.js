import React from "react";
import NewsForm from "./NewsForm";
import "./News.css";

const CreateNews = () => {
  return (
    <div className="create-news-container">
      <h1>Crear Novedad</h1>
      <NewsForm mode="create" />
    </div>
  );
};

export default CreateNews;
