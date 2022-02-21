import React, { useEffect } from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';
import { Formik, Form, Field } from 'formik';
import { validateUsername, validateEmail, validatePass, validateRole } from './ValidateFunctions';
import '../FormStyles.css';
const SUPPORTED_FORMATS = ["image/x-png", "image/x-jpg"];

const UserForm = () => {

    const userApi = `http://ongapi.alkemy.org/api/users/1312` //{user.id} Acá se debería reemplazar el numero por el id del usuario
    const [user, setUser] = React.useState({
        id: null,
        name: '',
        email: '',
        password: '',
        roleId: '',
        file: null,
        created_at: null,
    });
    
    useEffect (() => {
        axios.get(userApi)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
        });
       
    }, [userApi]);
  
    return (
        <Formik 
            initialValues= {user}
            
            onSubmit= {(values, {resetForm}) => {
                console.log(values)
                if(user.id){
                    axios({
                        method: 'patch',
                        url: userApi, 
                        data: values,
                    })
                    .then(res => {
                        //Actualizar los registros
                    })
                    .catch(err => {
                        console.log(err);
                    });
                } else {
                    axios({
                        method: 'post',
                        url: userApi, 
                        data: values
                    })
                    .then(response => {
                        //Crear un nuevo registro
                        resetForm();
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
                
            }}
        >
            {({ handleChange, values, setFieldValue, errors, touched }) => (
                <Form className='form-container'>
                    
                    {/* Name Field */}
                    <Field className="input-field" type="text" name="name" value={values.name || ''} 
                    onChange={handleChange} placeholder="Name" validate={validateUsername} />
                    {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
                    
                    {/* Email Field */}
                    <Field className="input-field" type="text" name="email" value={values.email || ''} 
                    onChange={handleChange} placeholder="Email" validate={validateEmail}/>
                    {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                    
                    {/* Password Field */}
                    <Field className="input-field" type="password" name="password" value={values.password || ''} 
                    onChange={handleChange} placeholder="Password" validate={validatePass}/>
                    {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
                    
                    {/* Image upload and preview */}
                    {values.file && <ImagePreview file={values.file} />}
                    <Field className='input-field' type='file' accept={SUPPORTED_FORMATS} value={values.profilePhoto} 
                    onChange={(event) => setFieldValue("file", event.target.files[0])} />                   
                    {errors.file && touched.file && <div className="input-feedback">{errors.file}</div>}
                    
                    {/* Role select */}
                    <Field component="select" name="roleId" id="roleId" className="input-field" value={values.roleId || ''} 
                    onChange={handleChange} validate={validateRole}>
                                    <option value="" disabled >Seleccione un Rol</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Regular</option>
                    </Field>
                    {errors.roleId && touched.roleId && <div className="input-feedback">{errors.roleId}</div>}
                    
                    <button className="submit-btn" type="submit">Send</button>
                </Form>
            )}

        </Formik>       
    );
}
 
export default UserForm;