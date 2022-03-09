import React, {useState, useEffect} from 'react';
import TitleComponent from "../title/TitleComponent"
import ActivitiesList from './ActivitiesList';
import { store } from "../../app/store";
import { getActivities, postActivities, updateActivities, deleteActivities } from "../../Services/ActivityApiService";
import { addActivitiesAction, updateActivitiesAction, deleteActivitiesAction } from "../../actions/actions";

const Actividades = () => {

  const [dataActivities, setDataActivities] = useState({});
  const [error, setError] = useState(false);
  
  useEffect(() => {
		try {
			(async () => {
				const response = await getActivities();
				store.dispatch(setDataActivities(response.data));
			})()
		} catch (error) {
			setError(true)
		}
	}, []);

  const fetchAddActivities = async (bodyData) => { 
    try {
        const response = await postActivities(bodyData);
        store.dispatch(addActivitiesAction(response.data.data))
        setDataActivities(store.getState().activity)
    }
    catch (error) {
        setError(true)
    }
  }

  const fetchUpdateActivities = async (bodyData) => {
    try {
        await updateActivities(bodyData.id, bodyData);
        store.dispatch(updateActivitiesAction(bodyData))
        setDataActivities(store.getState().activity.activity);
    }
    catch (error) {
        setError(true)
    }
  }

  const fetchDeleteActivities = async (id) => {
    try {
        await deleteActivities(id);
        store.dispatch(deleteActivitiesAction(id))
        setDataActivities(store.getState().activity.activity);
    }
    catch (error) {
        setError(true)
    }
  }

  return (
    <div>
        <TitleComponent 
            title = "actividades"
        />
        <ActivitiesList />
    </div>
  )
}

export default Actividades