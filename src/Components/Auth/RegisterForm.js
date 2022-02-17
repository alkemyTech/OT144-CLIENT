import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';
const RegisterForm = () => {

    const formValues = {
        name: {
            type: 'text',
            name: 'name',
            placeholder: 'Enter name',
            validate: value => {
                if(!value) {
                    return 'Name is required';
                }
            }
        },
        lastName: {
            type: 'text',
            name: 'lastName',
            placeholder: 'Enter last name',
            validate: value => {
                if(!value) {
                    return 'Lastname is required';
                }
            }
        },
        email: {
            type: 'email',
            name: 'email',
            placeholder: 'Enter email',
            validate: value => {
                if(!value) {
                    return 'Email is required';
                }
            }
        },
        password: {
            type: 'password',
            name: 'password',
            placeholder: 'Enter password',
            validate: value => {
                if(!value) {
                    return 'Password is required';
                }
                const PasswordPattern =  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#$%^&*()]{6,}$/; // 
                if(PasswordPattern.test(value)) {
                    return 'Password must contain at least one number, one letter, one special character and at least 6 characters';
                }
            }
        },
        password_confirmation: {
            type: 'password',
            name: 'password_confirmation',
            placeholder: 'Enter password confirmation',
            validate: value => {
                if(!value) {
                    return 'Password Confirmation is required';
                }
                if(value !== formValues.password.value) {
                    return 'Password Confirmation must be the same as password';
                }
            }
        }
    }

    const validate = values => {
        const errors = {};

        formValues.forEach(({ error }) => {
      
        return errors;
      };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        localStorage.setItem('token', 'tokenValueExample')
    }

    return (
        <Formik
            initialValues={Object.keys(formValues)}
            validate={validate}
            onSubmit={(values, helpers) => handleSubmit(values, helpers)}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form className="form-container" onSubmit={handleSubmit}>
                    {formValues.map((item) => (
                        <>
                            <input
                                type={item.type}
                                name={item.name}
                                onChange={handleChange}
                                value={values[item.name]}
                                placeholder={item.placeholder}
                                className="input-field"
                            />
                            {errors[item.name] && touched[item.name] && errors[item.name]}
                        </>
                    ))}
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}

export default RegisterForm;
