import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../../Components/FormStyles.css";
import { getBase64 } from "../../utils";
import CKEditorNews from '../News/CKEditorNews';
import axios from "axios";

const SlidesForm = ({ mode = "create", slides }) => {

    const [ formValues ] = useState({
        title: mode === "create" ? "" : slides.title,
        order: mode === "create" ? "" : slides.order,
        image: mode === "create" ? "" : slides.image,
        description: mode === "create" ? "" : slides.description
    })
    
    const validation = (values) => {
        let errores = {}
            //Validacion Name
            if(!values.name){
                errores.name = 'Por favor ingresa un nombre'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(values.name)){
                errores.name = 'El nombre solo puede contener letras y espacios'
            }
            //Validacion Order
            if(!values.order){
                errores.order = 'Por favor ingrese un numero de orden'
            }
            //Validacion Imagen
            if (!values.image) {
                errores.image = "Campo requerido";
              } else if (values.image) {
                const file = document.querySelector("input[name=image]").files[0];
                let fileType = file.type;
                let validImageTypes = ["image/jpeg", "image/png"];
                let size = file.size;
                if (!validImageTypes.includes(fileType) || size >= 5000000) {
                  errores.image =
                    "Seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB";
                }
              }
            //Validacion Order
            if(!values.description){
                errores.description = 'Por favor ingrese una descripción'
            }
            return errores;
    }

    const handleSubmit = async(data) => {
        const image = document.querySelector("input[name=image]").files[0];
        //Get the base64 of the image
        data.image = await getBase64(image);

        const dataObject = {
        name: data.name,
        order: data.order,
        image: data.image,
        description: data.description,
        };
        //If the mode is "create", the api is called via the POST verb, if not, the PUT verb is called with ID of slides
        if (mode === "create") {
            await axios.post("http://ongapi.alkemy.org/api/slides", dataObject, {
              "Content-Type": "application/json",
            });
          } else {
            await axios.patch(
              `http://ongapi.alkemy.org/api/slides/${slides.id}`,
              dataObject,
              {
                "Content-Type": "application/json",
              }
            );
          }
       
        console.log('Desde Handle', dataObject)
    };

    return (
        <Formik
            initialValues={formValues}
            validate={validation}
            onSubmit={ handleSubmit}  
        >
            {({errors, handleBlur, handleChange}) => {
                // console.log(errors)
                return (

                    <Form className="create-news-form" >
                        
                        <label>Slide Admin</label>
                            <div className='campo'>
                                
                                <Field
                                    className="input-field"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nombre"
                                />
                                <ErrorMessage name="name" component={() => (
                                    <div className="alert-danger">
                                        { errors.name}
                                    </div>
                                )} />
                                   
                                <Field
                                    className="input-field"
                                    id="order"
                                    name= "order"
                                    type="text"
                                    placeholder="Order"
                                />
                                <ErrorMessage name="order" component={() => (
                                    <div className="alert-danger">
                                        { errors.order}
                                    </div>
                                )} />
                                
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.image &&
                                    <div className="alert-danger">
                                        { errors.image}
                                    </div>
                                }
                                <Field name="description">
                                    {({ field, form }) => <CKEditorNews form={form} field={field} />}
                                </Field>
                                
                            </div >
                            <Field  className="submit-btn" type="submit" name="enviar" value="Enviar"/>
                            <button type="submit" className="submit-btn">enviar</button>
                    </Form>
                    )
            } }
        </Formik>
    );
}
 
export default SlidesForm;