import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function OrganizationEditForm() {
    
    const [values, setValues] = useState({
        name: '',
        logo: '',
        shortDescription: '',
        longDescription: '',
        socialNetworkLinks: []
    });

    const regexUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    const handleChangeName = (event) => {
        setValues({...values, name:event.target.value})
    }

    const handleChangeLogo = () => {
        const file    = document.querySelector('input[type=file]').files[0];
        setValues({...values, logo:file})

        /*
        GUARDE LA IMAGEN COMO FILE. CON ESTO SE PUEDE LEER Y CARGAR AL SRC DE LA IMG.
        const reader  = new FileReader();
        const preview = document.querySelector('img');
        reader.onloadend=()=>{
            preview.src = reader.result;
        }

        if(file){
            reader.readAsDataURL(file)
        }else{
            preview.src=""
        }*/
    }

    const handleChangeLongDescription = (event) => {
        setValues({...values, longDescription:event.target.value})
    }

    const handleChangeSocialNetworks = (event) =>{
        setValues({...values, socialNetworkLinks: event.target.value.split(",")})
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        validateSocialNetworks()
    }

    const validateSocialNetworks = () => {
        let resultado = true
        values.socialNetworkLinks.forEach((url)=>{
            if(!regexUrl.test(url)){
                resultado= false;
            }
           
        })
        return resultado;
    }

    console.log(values);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={values.name} onChange={handleChangeName} placeholder="Nombre de la organización" required/>
            <div>
                <h3>Carga tu logo: </h3>
                <input type="file" name="logo" onChange={handleChangeLogo} accept=".png, .jpg" required/>
            </div>
            <div>
                <h3>Ingresá una descripción breve: </h3>
            <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setValues({...values, shortDescription:data})
                }}
            />
            </div>
            <textarea name="longDescription" value={values.longDescription} onChange={handleChangeLongDescription} placeholder="Ingresá una descripción detallada" />
            <textarea name="socialNetworkLinks" value={values.socialNetworkLinks} onChange={handleChangeSocialNetworks} placeholder="Ingresá url de tus redes sociales" />
            <button type="submit">Send</button>
        </form>
    )
}