import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik } from "formik";
import postActivities from "./api/postActivities";
import putActivities from "./api/putActivities";
import "./ActivitiesForm.css";

const ActivitiesForm = ({ props }) => {
  const [initialValues, setInitialValues] = useState({
    id: null,
    name: "",
    description: "",
    image: "",
  });

  const [IsActivity, SetIsActivity] = useState(false);

  useEffect(() => {
    if (props) {
      SetIsActivity(true);
      setInitialValues({
        ...props,
        id: props.id,
        name: props.name,
        description: props.description,
        image: props.image,
      });
    }
  }, []);

  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return reader.result;
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "requerido";
    }
    if (!values.image) {
      errors.image = "requerido";
    }
    return errors;
  };

  const changeHandleFile = (e) => {
    const file = e.target.files[0];
    const fileConvert = getBase64(file);
    console.log(fileConvert, file);
    setInitialValues({ ...initialValues, image: fileConvert });
  };

  const inputCKeditorHandler = (event, editor) => {
    const data = editor.getData();
    setInitialValues({ ...initialValues, description: data });
  };

  const changeHandleName = (e) => {
    setInitialValues({
      ...initialValues,
      name: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    IsActivity ? putActivities(initialValues) : postActivities(initialValues);
  };

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validate={validate}>
        {({ errors, touched }) => (
          <form onSubmit={submitData}>
            <label>Nombre</label>
            <input
              className="input-field"
              placeholder={IsActivity ? props.name : "Nombre"}
              name="name"
              onChange={changeHandleName}
            />
            {touched.name && errors.name ? <div>{errors.name}</div> : null}
            <label>Imagen</label>
            <input
              className="input-field"
              type="file"
              accept=".png, .jpg"
              onChange={changeHandleFile}
            />
            {touched.image && errors.image ? <div>{errors.image}</div> : null}
            <label>Descripción</label>
            <CKEditor
              editor={ClassicEditor}
              data="description"
              onChange={inputCKeditorHandler}
            />
            <div className="btn-container">
              <button className="submit-btn" type="submit">
                {IsActivity ? "Actualizar" : "Send"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ActivitiesForm;
