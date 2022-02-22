import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Formik, Form, Field } from "formik";
import "../../Components/FormStyles.css";
import CKEditorNews from "./CKEditorNews";
import axios from "axios";
import { getBase64 } from "../../utils";
import { MIN_LENGTH_TITLE_NEWS } from "../../constants";

const validate = (values) => {
  const errors = {};
  //Validations for title
  if (!values.title) {
    errors.title = "Campo requerido";
  } else if (values.title.length < MIN_LENGTH_TITLE_NEWS) {
    errors.title = `El título debe tener al menos ${MIN_LENGTH_TITLE_NEWS} caracteres`;
  }

  //Validations for category
  if (!values.category) {
    errors.category = "Campo requerido";
  }

  //Validations for image
  if (!values.image) {
    errors.image = "Campo requerido";
  } else if (values.image) {
    const file = document.querySelector("input[name=image]").files[0];
    let fileType = file.type;
    let validImageTypes = ["image/jpeg", "image/png"];
    let size = file.size;
    if (!validImageTypes.includes(fileType) || size >= 5000000) {
      errors.image =
        "Seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB";
    }
  }

  //Validations for content
  if (!values.content) {
    errors.content = "Campo requerido";
  }

  return errors;
};

const NewsForm = ({ mode = "create", novelity }) => {
  //If the mode is "create" empty values are assigned, if not, the novelity data is assigned
  const [formValues] = useState({
    title: mode === "create" ? "" : novelity.title,
    category: mode === "create" ? "" : novelity.category,
    image: mode === "create" ? "" : novelity.image,
    content: mode === "create" ? "" : novelity.content,
  });
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        "http://ongapi.alkemy.org/api/categories",
        { "Content-Type": "application/json" }
      );
      setCategories(response.data.data);
    };
    getCategories();
  }, []);

  const handleSubmit = async (data) => {
    //Information is extracted from the input image
    const image = document.querySelector("input[name=image]").files[0];
    //Get the base64 of the image
    data.image = await getBase64(image);
    const dataObject = {
      name: data.title,
      category_id: data.category,
      image: data.image,
      content: data.content,
    };
    //If the mode is "create", the api is called via the POST verb, if not, the PUT verb is called with ID of novelity
    if (mode === "create") {
      await axios.post("http://ongapi.alkemy.org/api/news", dataObject, {
        "Content-Type": "application/json",
      });
    } else {
      await axios.put(
        `http://ongapi.alkemy.org/api/news/${novelity.id}`,
        dataObject,
        {
          "Content-Type": "application/json",
        }
      );
    }
  };

  return (
    <Formik
      initialValues={formValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, touched, handleChange }) => (
        <Form className="create-news-form">

          <Field
            className="input-field"
            type="text"
            name="title"
            placeholder="Título de la Novedad"
            onBlur={handleBlur}
          />
          {
          touched.title && errors.title
           ? (<div className="alert-danger">{errors.title}</div>)
           : null
          }

          <Field
            as="select"
            className="select-field"
            name="category"
            onBlur={handleBlur}
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field>
          {
          touched.category && errors.category
          ? (<div className="alert-danger">{errors.category}</div>)
          : null
          }

          <Field name="content">
            {({ field, form }) => <CKEditorNews form={form} field={field} />}
          </Field>
          {
          touched.content && errors.content
          ? (<div className="alert-danger">{errors.content}</div>) 
          : null
          }

          <input
            type="file"
            name="image"
            accept="image/*"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {
          touched.image && errors.image
          ? (<div className="alert-danger">{errors.image}</div>)
          : null
          }

          <button className="submit-btn" type="submit">
            Enviar
          </button>

        </Form>
      )}
    </Formik>
  );
};

export default NewsForm;

NewsForm.propTypes = {
  mode: PropTypes.string.isRequired,
  novelity: PropTypes.object,
}