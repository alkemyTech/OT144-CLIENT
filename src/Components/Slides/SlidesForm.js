import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Actividades from '../Activities/Actividades';
import '../FormStyles.css';
import TitleComponent from '../title/TitleComponent';

const SlidesForm = () => {
    const SlidesForm = () => {
    
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
                if(!values.img){
                    errores.img = 'Por favor ingrese una imagen'
                }else if(!(/\.(jpg|png)$/i).test(values.img)) {
                    errores.img = 'El archivo a adjuntar no es una imagen'
                }
                //Validacion Order
                if(!values.description){
                    errores.description = 'Por favor ingrese una descripción'
                }
                return errores;
        }
    
        const handleSubmit = (values) => {
            console.log('Desde Handle', values)
        }
    
        return (
    
            <Formik
                initialValues={{
                    name:'',
                    order:'',
                    img:'',
                    description:''
                    
                }}
                validate={validation}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    handleSubmit(values)
                } }
                
            >
                {({errors}) => {
                    // console.log(errors)
                    return (
    
                        <Form className="formulario" >
                            
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
                                        <div>
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
                                        <div>
                                            { errors.order}
                                        </div>
                                    )} />
                                    
                                    <Field
                                    
                                        id="img"
                                        type="file"
                                        name="img"
                                    />
                                    {errors.img &&
                                        <div>
                                            { errors.img}
                                        </div>
                                    }
    
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => { 
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                    
                                    <Field
                                        as="textarea"
                                        className="input-img"
                                        id="description"
                                        name="description"
                                        placeholder="Descripción"
                                    />
                                    {errors.description &&
                                        <div>
                                            { errors.description}
                                        </div>
                                    }
                                </div>
                                <Field  className="submit-btn" type="submit" name="enviar" value="Enviar"/>
                                <button type="submit" className="submit-btn">enviar</button>
                        </Form>
                        )
                } }
            </Formik>
    
        );
    }
}
 
export default SlidesForm;