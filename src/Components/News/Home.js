import React, {useState, useEffect} from "react";
import "./Home.css";
import Title from "../title/TitleComponent";
import Card from "../UI/Card/Card";
import { getNews } from '../../Services/NewsApiServices';
import { store } from "../../app/store";
import { setNewsAction } from "../../actions/actions";
import SpinnerComponent from '../UI/spinner/SpinnerComponent'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import ReactSocialPlugins from '../UI/ReactSocialPlugins/ReactSocialPlugins';


export default function Home() {

  const [dataNews, setDataNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
      try {
          (async () => {
              const response = await getNews();
              store.dispatch(setNewsAction(response.data))
              setDataNews(store.getState().news.news.data)
              setLoading(false); 
          })()
      }
      catch (error) {
          setError(true);
      }

  }, [])  

  if(loading){
    return <SpinnerComponent />
  }

  if(error){
      return <ErrorAlert />
  }
  return (
    <div className="homeNews">
        <ReactSocialPlugins/>
        <div style={{ width: "80%", margin: "auto", marginTop: "3rem" }}>
          <Title title={"Novedades"} />
          <div className="new-list-container">
            {dataNews.map((data, index) => (
              <Card
                key={index}
                cardItem={data}
              />
            ))}
          </div>
        </div>
    </div>
  )
}
