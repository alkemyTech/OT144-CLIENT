import React from 'react'
import axios from 'axios'

export default function EditDataScreen()  {

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
    
    const handleChange  = (e) => {
        setData({
            ...data,
             data: {...data,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: `http://ongapi.alkemy.org/api${endpoint}/${data.data?.id}`,
            data: data
            })
            .then(res => {
                console.log(res)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div>
            <form className='form-container' onSubmit={handleEdit}>

                <label className="name">Edita el nombre</label>
                <input type="text" className='input-field' name="name" id="name" 
                defaultValue={data.data?.name || ''} onChange={(e) => handleChange(e)}/>
             
                <label className="image">Cambia la imagen</label>
                <input type="file" className='input-field' name="logo" id="image" onChange={(e) => handleChange(e)} />
               
                <label className="name">Edita la descripción</label>
                <input type="text" className='input-field' name="short_description" id="description" 
                defaultValue={data.data?.short_description || ''} onChange={(e) => handleChange(e)} />

                <button className='submit-btn'>Guardar Cambios</button>
            </form>
        </div>
    )
}
