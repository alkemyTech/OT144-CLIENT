import React, { useState } from "react";
import "../FormStyles.css";
import "./MembersForm.css";
import { Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileInputFormik from "./FileInputFormik";
const MembersForm = () => {
  const [image, setImage] = useState("");
  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";
  const formValues = [
    {
      type: "text",
      name: "name",
      placeholder: "Ingrese su nombre por favor",
      validate: (value) => {
        if (!value) {
          return "El nombre es obligatorio";
        }
        if (value.length < 4) {
          return "El nombre debe tener al menos 4 caracteres";
        }
      },
      divStyle: { gridArea: "name" },
    },
    {
      type: "text",
      name: "instagram",
      placeholder: "Ingrese el nombre de usuario de Instagram",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Instagram";
        }
      },
      divStyle: { gridArea: "instagram" },
    },
    {
      type: "text",
      name: "twitter",
      placeholder: "Ingrese el nombre de usuario de Twitter",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Twitter";
        }
      },
      divStyle: { gridArea: "twitter" },
    },
    {
      type: "text",
      name: "facebook",
      placeholder: "Ingrese el nombre de usuario de Facebook",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Facebook";
        }
      },
      divStyle: { gridArea: "facebook" },
    },
  ];

  const validate = (values) => {
    const errors = {};
    formValues.forEach(({ validate, name }) => {
      if (validate(values[name])) {
        errors[name] = validate(values[name]);
      }
    });

    if (values.description === "") {
      errors.description = "La descripción es obligatoria";
    }

    if (!image) {
      errors.image = "La imagen de perfil es obligatoria";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      }).then((base64) => {
        return base64;
      });
    };

    const newValues = {
      ...values,
      image: await getBase64(image),
      instagram: "https://www.instagram.com/" + values.instagram,
      twitter: "https://www.twitter.com/" + values.twitter,
      facebook: "https://www.facebook.com/" + values.facebook,
    };
    console.info(newValues);
    setSubmitting(false);
  };

  const handleImageChange = (e, handleChange) => {
    let file = e.target.files[0];
    let fileType = file.type;
    let validImageTypes = ["image/jpeg", "image/png"];
    let size = file.size;
    if (!validImageTypes.includes(fileType) || size >= 5000000) {
      alert(
        "Por favor seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB"
      );
      setImage("");
      handleChange(e);
      return;
    }
    setImage(e.target.files[0]);
    handleChange(e);
  };

  return (
    <Formik
      initialValues={{}}
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
      }) => (
        <form
          className="form-container"
          id="form-member-creation"
          onSubmit={handleSubmit}
        >
          {formValues.map((item) => (
            <div
              key={item.name}
              style={{
                ...item.divStyle,
              }}
              className="create-member-input-field"
            >
              <input
                type={item.type}
                name={item.name}
                onChange={handleChange}
                value={values[item.name]}
                placeholder={item.placeholder}
                className={`input-field ${item.className}`}
              />

              {errors[item.name] && touched[item.name] && errors[item.name]}
            </div>
          ))}
          <div
            style={{ gridArea: "description" }}
            className="create-member-input-field"
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>¡Escribe una descripcion!</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                let e = {
                  target: {
                    value: data,
                    name: "description",
                  },
                };
                handleChange(e);
              }}
            />
            {errors.description && touched.description && errors.description}
          </div>
          <FileInputFormik
            name="image"
            onChange={(e) => handleImageChange(e, handleChange)}
            style={{ gridArea: "imageInput" }}
            accept={".png, .jpg"}
            errors={errors}
            touched={touched}
          />
          <img
            src={image ? URL.createObjectURL(image) : imageExample}
            alt="profile images"
            className="profile-preview-image"
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            style={{ gridArea: "submit" }}
          >
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
};

export default MembersForm;
