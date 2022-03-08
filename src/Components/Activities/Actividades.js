import React, {useState, useEffect} from 'react';
import TitleComponent from "../title/TitleComponent"
// import { store } from "../../../app/store";
// import { getActivity, getActivities, postActivity, updateActivity, deleteActivity } from "../../../Services/ActivitiesService";
// import { setActivityAction, addActivityAction,updateActivityAction, deleteActivityAction } from "../../../actions/actions";

const Actividades = () => {

  const [dataActivity, setDataActivity] = useState({});
  const [error, setError] = useState(false);
  
  // useEffect(() => {
	// 	try {
	// 		(async () => {
	// 			const response = await getActivity();
	// 			store.dispatch(setDataActivity(response.data));
	// 		})()
	// 	} catch (error) {
	// 		setError(true)
	// 	}
	// }, []);

//   const fetchAddActivities = (bodyData) => { //Revisar este atributo
//     try {
//         (async () => {
//             const response = await postNews(bodyData);
//             store.dispatch(addActivityAction(response.data.data))
//             setDataActivity(store.getState().activity)
//         })()
//     }
//     catch (error) {
//         setError(true)
//     }
// };

  // const fetchUpdateActivity = (bodyData) => {
  //     try {
  //         (async () => {
  //             await updateActivity(bodyData.id, bodyData);
  //             store.dispatch(updateActivityAction(bodyData))
  //             setDataActivity(store.getState().activity.activity);
  //         })()
  //     }
  //     catch (error) {
  //        setError(true)
  //     }
  // }

  // const fetchDeleteActivity = (id) => {
  //     try {
  //         (async () => {
  //             await deleteActivity(id);
  //             store.dispatch(deleteActivityAction(id))
  //             setDataActivity(store.getState().activity.activity);
  //         })()
  //     }
  //     catch (error) {
  //        setError(true)
  //     }
  // }

  // const body= {name:"pruebaUpdate"}/*REEMPLAZAR POR LA INFORMACION QUE VENGA DE LA PANTALLA DE EDITAR */

  // const handleClickUpdate = (body, event) => {
  //     fetchUpdateNews({id: parseInt(event.target.id), ...body});
  // }

  // const handleClickDelete = (event) => {
  //     fetchDeleteNews(parseInt(event.target.id))
  // }

  return (
    <div>
        <TitleComponent 
            title = "actividades"
        />
    </div>
  )
}

export default Actividades