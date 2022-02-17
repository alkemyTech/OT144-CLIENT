import React from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';
const RegisterForm = () => {

    const formValues = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Enter name',
            validate: value => {
                if (!value) {
                    return 'Name is required';
                }
            }
        },
        {
            type: 'text',
            name: 'lastName',
            placeholder: 'Enter last name',
            validate: value => {
                if (!value) {
                    return 'Lastname is required';
                }
            }
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Enter email',
            validate: value => {
                if (!value) {
                    return 'Email is required';
                }
            }
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Enter password',
            validate: value => {
                if (!value) {
                    return 'Password is required';
                }
                const PasswordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#$%^&*()]{6,}$/; // 
                if (PasswordPattern.test(value)) {
                    return 'Password must contain at least one number, one letter, one special character and at least 6 characters';
                }
            }
        },
        {
            type: 'password',
            name: 'password_confirmation',
            placeholder: 'Enter password confirmation',
            validate: value => {
                if (!value) {
                    return 'Password Confirmation is required';
                }
                if (value !== formValues.password.value) {
                    return 'Password Confirmation must be the same as password';
                }
            }
        }
    ]

    const validate = values => {
        const errors = {};

        formValues.forEach(({ validate, name }) => {
            if (validate) {
                errors[name] = validate(values[name]);
            }
        });
        return errors;
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        localStorage.setItem('token', 'tokenValueExample')
    }

    return (
        <Formik
            initialValues={formValues.map(({name})=>name)}
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
