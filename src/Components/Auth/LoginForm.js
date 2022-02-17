import React, { useState } from 'react';
import { Formik } from 'formik';
import '../FormStyles.css';

const validation = values => {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email is required!';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (values.password.length < 6) {
        errors.password = "Password must be larger than 6 characters";
    } else if (
        !/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(values.password)
    ) {
        errors.password = 'Password must contains at least one number, one letter and one special character';
    }

    console.log(errors);
    return errors;
}

const LoginForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: ''
    });

    /*const handleChange = (e) => {
        if (e.target.name === 'email') {
            setInitialValues({ ...initialValues, email: e.target.value })
        } if (e.target.name === 'password') {
            setInitialValues({ ...initialValues, password: e.target.value })
        }
    }*/

    /*const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'tokenValueExample')
    }*/

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            
            onSubmit={((values,actions) => {
                setInitialValues({email: values.email, password:values.password})
                localStorage.setItem('token', 'tokenValueExample')
            })}
            validate={validation}
            >  
            {(props) => {
                return (
                    <form className="form-container" onSubmit={props.handleSubmit}>
                        <input className="input-field" type="email" name="email" value={props.values.email} onChange={props.handleChange} placeholder="Enter email"></input>
                        <div className= "div-error">{props.touched.email && props.errors.email}</div>
                        <input className="input-field" type="password" name="password" value={props.values.password} onChange={props.handleChange} placeholder="Enter password"></input>
                        <div className= "div-error">{props.touched.password && props.errors.password}</div>
                        <button className="submit-btn" type="submit">Log In</button>
                    </form>)
            }}
        </Formik>
    );
}

export default LoginForm;