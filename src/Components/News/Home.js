import React from "react";
import "./Home.css";
import Title from "../title/TitleComponent";
import Card from "../UI/Card/Card";
export default function Home({ news }) {
  const newsProp = [
    {
      title: "Titulo1 Titulo1Titulo1 Titulo1",
      id: "23",
      description:
        "Laborum qui eiusmod ex cupidatat. Esse ut commodo occaecat in culpa cillum ex ad labore laboris laboris enim elit. Eu et cillum mollit proident labore ex esse non in. Voluptate nostrud culpa veniam amet anim dolor.",
      image:
        "https://images.unsplash.com/photo-1646036185413-150ec1d0e74f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    },
    {
      title: "Titulo2",
      id: "23",
      description:
        "Laborum qui eiusmod ex cupidatat. Esse ut commodo occaecat in culpa cillum ex ad labore laboris laboris enim elit. Eu et cillum mollit proident labore ex esse non in. Voluptate nostrud culpa veniam amet anim dolor.",
      image:
        "https://images.unsplash.com/photo-1646062142799-73dd49cf315a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      title: "Titulo3",
      id: "31",
      description:
        "Laborum qui eiusmod ex cupidatat. Esse ut commodo occaecat in culpa cillum ex ad labore laboris laboris enim elit. Eu et cillum mollit proident labore ex esse non in. Voluptate nostrud culpa veniam amet anim dolor.",
      image:
        "https://images.unsplash.com/photo-1645908107147-b3d0d7e37ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      title: "Titulo4",
      id: "300",
      description:
        "Laborum qui eiusmod ex cupidatat. Esse ut commodo occaecat in culpa cillum ex ad labore laboris laboris enim elit. Eu et cillum mollit proident labore ex esse non in. Voluptate nostrud culpa veniam amet anim dolor.",
      image:
        "https://images.unsplash.com/photo-1645894183288-9c43d07958fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "3rem" }}>
      <Title title={"Novedades"} />
      <div className="new-list-container">
        {newsProp.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
}
