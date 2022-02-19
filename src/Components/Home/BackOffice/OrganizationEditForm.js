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

    console.log(values);

    return (
        <form>
            <input type="text" name="name" value={values.name} onChange={handleChangeName} placeholder="Nombre de la organización" required/>
            <div>
                Carga tu logo: 
                <input type="file" name="logo" onChange={handleChangeLogo} accept=".png, .jpg" required/>
            </div>
            <div>
                Ingresá una descripción breve: 
            <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setValues({...values, shortDescription:data})
                }}
            />
            </div>
            <input type="text" name="longDescription" value={values.longDescription} onChange={handleChangeLongDescription} placeholder="Ingresá una descripción detallada" />
            <input type="text" name="socialNetworkLinks" value={values.socialNetworkLinks} placeholder="Ingresá una red social" />
            <button type="submit">Send</button>
        </form>
    )
}