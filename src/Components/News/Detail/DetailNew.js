import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TitleComponent from "../../title/TitleComponent";
import DetailContent from "./DetailContent";

const DetailNew = () => {
  const [data, setData] = React.useState({
    text: "",
    img: "",
    nameImg: "",
    content: "",
  });
  const urlParams = useParams();

  useEffect(() => {
    const getDataNew = async () => {
      const { data } = await axios.get(
        `http://ongapi.alkemy.org/api/news/${urlParams.id}`
      );
      setData({
        text: data.data.name,
        img: data.data.image,
        nameImg: data.data.name,
        content: data.data.content,
      });
    };
    getDataNew();
  }, []);

  return (
    <main>
      {data ? (
        <>
          <TitleComponent
            title={data.text}
            img={data.img}
            nameImg={data.nameImg}
          />
          <DetailContent data={data} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default DetailNew;
