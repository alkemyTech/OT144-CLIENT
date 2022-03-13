import { useState, useEffect } from "react"
import TitleComponent from "../title/TitleComponent"
import { getActivities } from "../../Services/ActivityApiService";
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
        const response = await getActivities();
        if (response.status === 200) {
          setDataLoading({ ...dataLoading, data: response.data.data, loading: false })
        } else {
          setDataLoading({ ...dataLoading, error: response.error, loading: false })
        }

      })()
    }
    catch (error) {
      setDataLoading({ ...dataLoading, error: error, loading: false })
    }
  }, [dataLoading]);

  if (dataLoading.loading) {
    return  <div className="spinner-container">
              < SpinnerComponent loading={dataLoading.loading} />
            </div >
  }

  if (dataLoading.error) {
    return <ErrorAlert />
  }

  
    return (
      <div>
        <TitleComponent
          title="Actividades"
        />
        <div className="new-list-container">
          {dataLoading.data.map((activity, index) => <Card key={index} cardItem={activity} />)}
        </div>
      </div>)
  
}

export default Actividades