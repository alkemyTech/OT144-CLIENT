import React, { useEffect } from 'react'
import ImagePreview from './ImagePreview'
import { Formik, Form, Field } from 'formik'
import { validateUsername, validateEmail, validatePass, validateRole } from './ValidateFunctions'
import { getUser, createUser, updateUser } from '../../Services/userService'
import BasicAlert from '../UI/Alerts/BasicAlert'
import ErrorAlert from '../UI/Alerts/ErrorAlert'
import '../FormStyles.css'
import GoogleMaps from '../UI/GoogleMaps/googleMaps'
import SearchLocationInput from './SearchLocationInput'


const SUPPORTED_FORMATS = ['image/png', 'image/jpg']

const UserForm = (props) => {

    const userApi = `http://ongapi.alkemy.org/api/users/${props.id}` //{user.id} Acá se debería reemplazar el numero por el id del usuario
    const [user, setUser] = React.useState({
        id: null,
        name: '',
        email: '',
        password: '',
        roleId: '',
        profile_image: null,
        created_at: null,
        updated_at: null,
        latitude: null,
        longitude: null,
        address: null,
    })
    
    useEffect (() => {
        const fetchUser = async () => {
            try {
                await getUser(userApi).then(res => {
                setUser(res.data)
            })
            } catch (error) {
                ErrorAlert('error', 'Error al obtener tus datos.', 'Por favor, vuelva a intentarlo más tarde.')
            }
        }
        fetchUser()
    }, [userApi])
    
    if(!user.latitude && !user.longitude) {
        setUser({...user, latitude: -34.603722, longitude: -58.381592})
    }
    
    return (
        <Formik 
            initialValues= {user}
            
            onSubmit= {async (values, {resetForm}) => {
                if(user.id){
                    try {
                        await updateUser(user.id, values)
                        BasicAlert('success', 'Usuario actualizado con éxito')
                        resetForm()
                    } catch (error) {
                        ErrorAlert('error', 'Error al actualizar usuario')
                    }
                } else {
                    try {
                        await createUser(values)
                        BasicAlert('success', 'Usuario creado con éxito')
                        resetForm()
                    } catch (error) {
                        ErrorAlert('error', 'Error al crear usuario')
                    }
                }
                
            }}
        >
            {({ handleChange, values, setFieldValue, errors, touched }) => (
                <Form className='form-container'>
                    
                    <Field className='input-field' type='text' name='name' value={values.name} 
                    onChange={handleChange} placeholder='Name' validate={validateUsername} />
                    {errors.name && touched.name && <div className='input-feedback'>{errors.name}</div>}
                    
                    <Field className='input-field' type='text' name='email' value={values.email} 
                    onChange={handleChange} placeholder='Email' validate={validateEmail}/>
                    {errors.email && touched.email && <div className='input-feedback'>{errors.email}</div>}
                    
                    <Field className='input-field' type='password' name='password' value={values.password} 
                    onChange={handleChange} placeholder='Password' validate={validatePass}/>
                    {errors.password && touched.password && <div className='input-feedback'>{errors.password}</div>}

                    <SearchLocationInput value={values.address} onChange={(e) => setUser(...user, e.target.value)} />
                    
                    {values.file && <ImagePreview file={values.file} />}
                    <Field className='input-field' type='file' accept={[SUPPORTED_FORMATS]} value={values.profilePhoto} 
                    onChange={(event) => setFieldValue('file', event.target.files[0])} />                   
                    {errors.file && touched.file && <div className='input-feedback'>{errors.file}</div>}
                    
                    <Field component='select' name='roleId' id='roleId' className='input-field' value={values.roleId} 
                    onChange={handleChange} validate={validateRole}>
                                    <option value='' disabled >Seleccione un Rol</option>
                                    <option value='1'>Admin</option>
                                    <option value='2'>Regular</option>
                    </Field>
                    {errors.roleId && touched.roleId && <div className='input-feedback'>{errors.roleId}</div>}

                    <section >
                    <GoogleMaps latitude={values.latitude} longitude={values.longitude} />
                    </section>
                    
                    <button className='submit-btn' type='submit'>Send</button>
                </Form>
            )}

        </Formik> 
              
    )
}
 
export default UserForm
