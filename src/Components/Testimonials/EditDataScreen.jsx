import React from 'react'
import axios from 'axios'

export default function EditDataScreen()  {

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
    
    const textEdit = (e) => {
        setData({
            ...data,
             data: {...data,
                name: e.target.value
            }
        })
    }

    const imageEdit = (e) => {
        setData({
            ...data, 
            data: {...data,
                logo: e.target.files[0]
            }
        })
    }
    
    const descriptionEdit = (e) => {
        setData({
            ...data,
            data: {...data,
                short_description: e.target.value
            }
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: 'http://ongapi.alkemy.org/api/organization/' + data.data?.id,
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

                {/* Name Form */}
                <label className="name">Edita el nombre</label>
                <input type="text" className='input-field' name="name" id="name" 
                defaultValue={data.data?.name || ''} onChange={(e) => textEdit(e)}/>

                {/* Image Form */}
                <label className="image">Cambia la imagen</label>
                <input type="file" className='input-field' name="image" id="image" 
                onChange={(e) => imageEdit(e)} />

                {/* Description Form */}
                <label className="name">Edita la descripción</label>
                <input type="text" className='input-field' name="description" id="description" 
                defaultValue={data.data?.short_description || ''} onChange={(e) => descriptionEdit(e)} 
                />

                <button className='submit-btn'>Guardar Cambios</button>
            </form>
        </div>
    )
}
