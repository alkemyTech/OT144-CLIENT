import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const DataScreen = () => {
    let navigate = useNavigate();
    const [data, setData] = React.useState([])
    const endpoint = process.env.REACT_APP_URL_ORGANIZATION
    React.useEffect(() => {
        axios.get(`http://ongapi.alkemy.org/api${endpoint}`)
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
        <button className='submit-btn' onClick={() => navigate('/backoffice/organization/edit')}>Editar</button>
    </div>
  )
}

export default DataScreen