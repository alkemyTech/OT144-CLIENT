import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ data }) {
  const { title, description, image, dateCreation="20-10-2022",id} = data;

  return (
    <div className="Article-card-container">
      <div className="Article-card">
        <Link to={id}>
          <div className="Article-card-imgBx">
            <img className="Article-card-image" src={image} alt="news" />
          </div>
          <div className="Article-card-contentBx">
            <div className="Article-card-content">
              <h3 id="title" className="Article-card-info">{title}</h3>
              <h3 id="date" className="Article-card-info">{dateCreation}</h3>
            </div>
          </div>
        </Link>
      </div>
      <p className="Article-card-description">{description}</p>
    </div>
  );
}
