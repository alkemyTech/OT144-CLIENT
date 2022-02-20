import React, { useState } from 'react';
import { Formik } from 'formik';
import "./stylesLogin.css"
import '../FormStyles.css';

const validation = values => {
    let errors = {};

    if (!values.email) {
        errors.email = 'El correo electrónico es requerido';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'El correo es inválido.';
    }

    if (values.password.length < 6) {
        errors.password = "La contraseña debe tener 6 o más caracteres.";
    } else if (
        !/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(values.password)
    ) {
        errors.password = 'La contraseña debe contener al menos 1 numero, una letra y un caracter especial.';
    }

    return errors;
}

const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    return (
        <Formik
            initialValues={values}

            onSubmit={((values, actions) => {
                setValues({ email: values.email, password: values.password })
                localStorage.setItem('token', 'tokenValueExample')
            })}
            validate={validation}
        >
            {(props) => {
                return (
                    <div className="form-container login">
                        <form onSubmit={props.handleSubmit}>
                            <h2>Iniciar sesión</h2>
                            <input className="input-field" type="email" name="email" value={props.values.email} onChange={props.handleChange} placeholder="Correo electrónico"></input>
                            <div className="div-error">{props.touched.email && props.errors.email}</div>
                            <input className="input-field" type="password" name="password" value={props.values.password} onChange={props.handleChange} placeholder="Contraseña"></input>
                            <div className="div-error">{props.touched.password && props.errors.password}</div>
                            <button className="submit-btn" type="submit">Iniciar sesión</button>
                        </form>
                    </div>)
            }}
        </Formik>
    );
}

export default LoginForm;