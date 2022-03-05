import React from "react";
import { Formik, Form, Field } from "formik";
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MAX_LENGTH_PHONE,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PHONE,
} from "../../constants";
import { postContact } from "./ServiceAPIContact";

const validate = (values) => {
  const errors = {};
  //Validaciones para el input "name"
  if (!values.name) {
    errors.name = "Campo requerido";
  } else if (values.name.length < MIN_LENGTH_NAME) {
    errors.name = `El nombre debe tener al menos ${MIN_LENGTH_NAME} caracteres`;
  } else if (values.name.length > MAX_LENGTH_NAME) {
    errors.name = `El nombre no puede tener más de ${MAX_LENGTH_NAME} caracteres`;
  } else if (
    !/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+([a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(
      values.name
    )
  ) {
    errors.name = "El nombre solo puede tener letras";
  }

  //Validaciones para el input "email"
  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (values.email.length > MAX_LENGTH_EMAIL) {
    errors.email = `El email no puede tener más de ${MAX_LENGTH_EMAIL} caracteres`;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Formato de Email no valido";
  }

  //Validaciones para el input "phone"
  if (!values.phone) {
    errors.phone = "Campo requerido";
  } else if (values.phone.length < MIN_LENGTH_PHONE) {
    errors.phone = `El celular debe tener al menos ${MIN_LENGTH_PHONE} caracteres`;
  } else if (values.phone.length > MAX_LENGTH_PHONE) {
    errors.phone = `El celular no puede tener más de ${MAX_LENGTH_PHONE} caracteres`;
  } else if (!/^([0-9])*$/.test(values.phone)) {
    errors.phone = "El celular debe contener solo numeros";
  }

  //Validaciones para el input "message"
  if (!values.message) {
    errors.message = "Campo requerido";
  }
  return errors;
};

const ContactForm = () => {
  const handleSubmit = (data) => {
    //Se elimina los espacios en blanco al inicio, los largos del intermedio y al final del nombre.
    data.name = data.name.replace(/\s+/g, " ").trim();
    try{
      postContact(data);
    }
    catch(error){
      alert(error);
      //BasicAlert('Algo no salió bien!', 'Al parecer, no se ha podido enviar el formulario');
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, touched }) => (
        <Form className="form-contact">
          
          <Field
            className="input-field"
            name="name"
            placeholder="Nombre"
            type="text"
            onBlur={handleBlur}
          />
          {
          (touched.name && errors.name)
          ? (<div className="alert-danger">{errors.name}</div>)
          : null
          }

          <Field
            className="input-field"
            name="email"
            placeholder="Email"
            type="text"
            onBlur={handleBlur}
          />
          {
          (touched.email && errors.email)
          ? (<div className="alert-danger">{errors.email}</div>)
          : null
          }

          <Field
            className="input-field"
            name="phone"
            placeholder="Celular"
            type="text"
            onBlur={handleBlur}
          />
          {
          (touched.phone && errors.phone)
          ? (<div className="alert-danger">{errors.phone}</div>)
          : null
          }

          <Field
            as="textarea"
            className="input-field"
            name="message"
            placeholder="Escribe tu consulta..."
            rows="4"
            style={{
              resize: "none",
            }}
            type="text"
            onBlur={handleBlur}
          />
          {
          (touched.message && errors.message)
          ? (<div className="alert-danger">{errors.message}</div>)
          : null
          }

          <button className="btn-submit" type="submit">
            Enviar
          </button>

        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
