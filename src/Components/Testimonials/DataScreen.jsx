import React from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const DataScreen = () => {
    let history = useHistory();
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get('http://ongapi.alkemy.org/api/organization')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div>
        <h1>{data.data?.name}</h1>
        <img src={data.data?.logo} alt='logo' width='200px' height='200px'/>
        <p>{data.data?.short_description}</p>
        <button className='submit-btn' onClick={() => history.push('/backoffice/organization-edit')}>Editar</button>
    </div>
  )
}

export default DataScreen