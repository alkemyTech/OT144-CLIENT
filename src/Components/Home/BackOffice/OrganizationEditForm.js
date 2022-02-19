import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./stylesOrganizationForm.css"


export default function OrganizationEditForm() {

    const [values, setValues] = useState({
        name: '',
        logo: '',
        shortDescription: 'Descripción breve*',
        longDescription: '',
        socialNetworkLinks: [],
        error:""
    });

    
    const regexUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    const handleChangeName = (event) => {
        setValues({ ...values, name: event.target.value })
    }

    const handleChangeLogo = () => {
        const file = document.querySelector('input[type=file]').files[0];
        setValues({ ...values, logo: file })

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
        setValues({ ...values, longDescription: event.target.value })
    }

    const handleChangeSocialNetworks = (event) => {
        setValues({ ...values, socialNetworkLinks: event.target.value.split(",") })

    }

    const validateSocialNetworks = () => {
        let resultado = true
        values.socialNetworkLinks.forEach((url) => {
            if (!regexUrl.test(url)) {
                resultado = false;
            }
        })
        return resultado;
    }

    const validateFields = () => {
        let resultado = true
        if(!values.name || values.shortDescription === "Descripción breve*" || !values.longDescription || values.socialNetworkLinks.length===0){
            resultado = false
        }
        return resultado
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!validateFields()){
            setValues({...values, error:"Todos los campos son obligatorios."})
        }
        if(!validateSocialNetworks()){
            setValues({...values, error:"Formato url erróneo."})
        }
    }
console.log(values);
    return (
        <div className="form-container organization">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={values.name} className="input-field" onChange={handleChangeName} placeholder="Nombre de la organización*" required />
                <div className="logo-container">
                    <label>Logo: </label>
                    <input type="file" name="logo" className="file-field" onChange={handleChangeLogo} accept=".png, .jpg" required />
                </div>
                <div>
                    <CKEditor
                        editor={ClassicEditor}
                        data={values.shortDescription}
                        onFocus={(event, editor) => {
                            console.log(editor.data);
                            editor.data.set("")
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setValues({ ...values, shortDescription: data })
                        }}
                    />
                </div>
                <textarea name="longDescription" value={values.longDescription} onChange={handleChangeLongDescription} placeholder="Ingresá una descripción detallada*" className="textarea-field" />
                <textarea name="socialNetworkLinks" value={values.socialNetworkLinks} onChange={handleChangeSocialNetworks} placeholder="Ingresá url de tus redes sociales (separadas por coma)*" className="textarea-field" />
                <button className="submit-btn" type="submit">Enviar</button>
                <div>{values.error}</div>
            </form>
        </div>
    )
}