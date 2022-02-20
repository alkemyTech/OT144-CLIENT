import React, { useState } from "react";
import "../FormStyles.css";
import { Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MembersForm = () => {
  const [image, setImage] = useState("");
  const formValues = [
    {
      type: "file",
      name: "image",
      placeholder: "Enter the image",
      validate: (value) => {
        if (!image) {
          return "Image is required";
        }
      },
      onChange: (e, handleChange) => {
        let fileType = e.target.files[0].type;
        if (fileType !== "image/png" && fileType !== "image/jpeg") {
          alert("Only png and jpeg files are allowed");
          setImage("");
          handleChange(e);
          return
        }
        setImage(e.target.files[0]);
        handleChange(e);
      },
      accept: ".png, .jpg",
    },
    {
      type: "text",
      name: "name",
      placeholder: "Enter name",
      validate: (value) => {
        if (!value) {
          return "Name is required";
        }
        if (value.length < 4) {
          return "Name must be at least 4 characters";
        }
      },
    },
    {
      type: "text",
      name: "instagram",
      placeholder: "Enter instagram",
      validate: (value) => {
        if (!value) {
          return "Instagram is required";
        }
      },
    },
    {
      type: "text",
      name: "twitter",
      placeholder: "Enter twitter",
      validate: (value) => {
        if (!value) {
          return "Twitter is required";
        }
      },
    },
    {
      type: "text",
      name: "facebook",
      placeholder: "Enter facebook",
      validate: (value) => {
        if (!value) {
          return "Facebook is required";
        }
      },
    },
  ];

  const validate = (values) => {
    const errors = {};
    formValues.forEach(({ validate, name }) => {
      if (validate(values[name])) {
        errors[name] = validate(values[name]);
      }
    });

    if (
      !errors.password_confirmation &&
      values.password !== values.password_confirmation
    ) {
      errors.password_confirmation =
        "Password Confirmation must be the same as password";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const newValues = {
      ...values,
      image: image,
      instagram: "https://www.instagram.com/" + values.instagram,
      twitter: "https://www.twitter.com/" + values.twitter,
      facebook: "https://www.facebook.com/" + values.facebook,
    };
    console.info(newValues);
    setSubmitting(false);
    localStorage.setItem("token", "tokenValueExample");
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
        <form className="form-container" onSubmit={handleSubmit}>
          {formValues.map((item) => (
            <React.Fragment key={item.name}>
              <input
                type={item.type}
                name={item.name}
                onChange={(e) =>
                  item.onChange
                    ? item.onChange(e, handleChange)
                    : handleChange(e)
                }
                value={values[item.name]}
                placeholder={item.placeholder}
                className="input-field"
                accept={item?.accept}
              />
              {errors[item.name] && touched[item.name] && errors[item.name]}
            </React.Fragment>
          ))}
          <CKEditor
            editor={ClassicEditor}
            data="<p>¡Escribi una descripcion!</p>"
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
          <button type="submit" className="submit-btn" disabled={isSubmitting}>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            style={{ gridArea: "submit" }}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default MembersForm;
