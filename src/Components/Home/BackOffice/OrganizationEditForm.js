import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./stylesOrganizationForm.css";
import { Formik } from "formik";

const validation = values => {
    let errors = {};
    const regexUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)?[-a-z0-9]+\.(?:com|gov|org|net|edu|biz)/

    if (values.shortDescription === 'Descripción breve*' || values.shortDescription==="") {
        errors.shortDescription = "Todos los campos son obligatorios."
    } 
    
    if(values.socialNetworkLinks){
        values.socialNetworkLinks = values.socialNetworkLinks.split(",")
        values.socialNetworkLinks.forEach((url) => {
            if (!regexUrl.test(url)) {
                errors.socialNetworkLinks = "Formato url erróneo."
            }
        })
    }

    return errors;
}

export default function OrganizationEditForm() {

    const [values, setValues] = useState({
        name: '',
        logo: '',
        shortDescription: 'Descripción breve*',
        longDescription: '',
        socialNetworkLinks: "",
    });

    const handleChangeLogo = (props) => {
        const file = document.querySelector('input[type=file]').files[0];
        props.values.logo= file
    }

    return (

        <Formik
            initialValues={values}
            onSubmit={((values, actions) => {
                setValues({ name: values.name, logo: values.logo, shortDescription: values.shortDescription, longDescription: values.longDescription, socialNetworkLinks: values.socialNetworkLinks.split(",") })
            })}
            validate={validation}
        >
            {(props) => {
                return (
                    <div className="form-container organization">
                        <form onSubmit={props.handleSubmit}>
                            <input type="text" name="name" value={props.values.name} className="input-field" onChange={props.handleChange} placeholder="Nombre de la organización*" required/>
                            <div className="logo-container">
                                <label>Logo: </label>
                                <input type="file" name="logo" className="file-field" onChange={()=>handleChangeLogo(props)} accept=".png, .jpg" required/>
                            </div>
                            <div>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={values.shortDescription}
                                    onFocus={(event, editor) => {
                                        editor.data.set("")
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        props.values.shortDescription = data
                                    }}
                                />
                            </div>
                            <textarea name="longDescription" value={props.values.longDescription} onChange={props.handleChange} placeholder="Ingresá una descripción detallada*" className="textarea-field" required/>
                            <textarea name="socialNetworkLinks" value={props.values.socialNetworkLinks} onChange={props.handleChange} placeholder="Ingresá url de tus redes sociales (separadas por coma)*" className="textarea-field" required/>
                            <div className="div-error">{props.touched.shortDescription && props.errors.shortDescription }</div>
                            <div className="div-error">{props.touched.socialNetworkLinks && props.errors.socialNetworkLinks}</div>
                            <button className="submit-btn" type="submit">Enviar</button>

                        </form>
                    </div>
                )
            }}
        </Formik>
    )
}
