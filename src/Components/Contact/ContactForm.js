import React from "react";
import { Formik, Form, Field } from "formik";

const validate = (values) => {
  const errors = {};
  //Validaciones para el input "name"
  if (!values.name) {
    errors.name = "Campo requerido";
  } else if (values.name.length < 3) {
    errors.name = "Nombre muy corto";
  } else if (
    !/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
      values.name
    )
  ) {
    errors.name = "El nombre solo puede tener letras";
  }
  //Validaciones para el input "email"
  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no valido";
  }
  //Validaciones para el input "phone"
  if (!values.phone) {
    errors.phone = "Campo requerido";
  } else if (!/^([0-9])*$/.test(values.phone)) {
    errors.phone = "El celular debe contener solo numeros";
  } else if (values.phone.length < 8) {
    errors.phone = "El celular debe tener al menos 8 caracteres";
  }
  //Validaciones para el input "message"
  if (!values.message) {
    errors.message = "Campo requerido";
  }
  return errors;
};

const ContactForm = () => {
  const handleSubmit = (data) => {
    console.log(data);
    // axios.post('/api/send-email-contact', data)
  };

  return (
    <>
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
            {touched.name && errors.name ? (
              <div className="alert-danger">{errors.name}</div>
            ) : null}
            <Field
              className="input-field"
              name="email"
              placeholder="Email"
              type="text"
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <div className="alert-danger">{errors.email}</div>
            ) : null}
            <Field
              className="input-field"
              name="phone"
              placeholder="Celular"
              type="text"
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone ? (
              <div className="alert-danger">{errors.phone}</div>
            ) : null}
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
            {touched.message && errors.message ? (
              <div className="alert-danger">{errors.message}</div>
            ) : null}
            <button className="btn-submit" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
