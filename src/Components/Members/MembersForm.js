import React, { useState } from "react";
import "../FormStyles.css";
import { Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MembersForm = () => {
  const [image, setImage] = useState("");
  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";
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
        let file = e.target.files[0];
        let fileType = file.type;
        let validImageTypes = ["image/jpeg", "image/png"];
        let size = file.size;
        if (!validImageTypes.includes(fileType) || size >= 5000000) {
          alert("Please upload a valid image. Only jpeg and png are allowed. Max size is 5MB.");
          setImage("");
          handleChange(e);
          return
        }
        setImage(e.target.files[0]);
        handleChange(e);
      },
      style: { gridArea: "imageInput" },
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
      style: { gridArea: "name" },
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
      style: { gridArea: "instagram" },
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
      style: { gridArea: "twitter" },
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
      style: { gridArea: "facebook" },
    },
  ];

  const validate = (values) => {
    const errors = {};
    formValues.forEach(({ validate, name }) => {
      if (validate(values[name])) {
        errors[name] = validate(values[name]);
      }
    });

    if(values.description === ""){
      errors.description = "Description is required"
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
        <form
          className="form-container"
          id="form-member-creation"
          onSubmit={handleSubmit}
        >
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
                style={{ ...item.style }}
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
          <img
            src={image ? URL.createObjectURL(image) : imageExample}
            alt="images"
            className="image"
          />

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
