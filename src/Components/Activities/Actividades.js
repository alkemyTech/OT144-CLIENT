import { useState, useEffect } from "react"
import TitleComponent from "../title/TitleComponent"
import { getActividades } from "../../Services/ActivityApiService";
import ErrorAlert from "../UI/Alerts/ErrorAlert"
import SpinnerComponent from "../UI/spinner/SpinnerComponent";
import Card from "../UI/Card/Card";

const Actividades = () => {

  const [dataLoading, setDataLoading] = useState({
    loading: true,
    data: [],
    error: ""
  });

  useEffect(() => {
    try {
      (async () => {
        const response = await getActividades();
        response.status === 200 ? setDataLoading({ ...dataLoading, data: response.data.data, loading: false }) : setDataLoading({ ...dataLoading, error: response.error, loading: false })
      })()
    }
    catch (error) {
      setDataLoading({ ...dataLoading, error: error, loading: false })
    }
  }, []);

  {
    return (
      dataLoading.loading ?
        <div className="spinner-container">
          < SpinnerComponent loading={dataLoading.loading} />
        </div >
        : (dataLoading.error ?
          <ErrorAlert />
          :
          <div>
            <TitleComponent
              title="Actividades"
            />
            <div className="new-list-container">
              {dataLoading.data.map((activity, index) => <Card key={index} cardItem={activity} />)}
            </div>
          </div>))
  }
}

export default Actividades