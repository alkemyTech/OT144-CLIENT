import React, { useState } from "react";
import "../FormStyles.css";
import "./MembersForm.css";
import { Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageInputFormik from "./ImageInputFormik";
const MembersForm = () => {
  const [image, setImage] = useState("");
  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";
  const formValues = [
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
      divStyle: { gridArea: "name" },
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
      divStyle: { gridArea: "instagram" },
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
      divStyle: { gridArea: "twitter" },
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
      errors.description = "Description is required";
    }

    if (!image) {
      errors.image = "Image is required";
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

  const handleImageChange = (e, handleChange) => {
    let file = e.target.files[0];
    let fileType = file.type;
    let validImageTypes = ["image/jpeg", "image/png"];
    let size = file.size;
    if (!validImageTypes.includes(fileType) || size >= 5000000) {
      alert(
        "Please upload a valid image. Only jpeg and png are allowed. Max size is 5MB."
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
                onChange={(e) =>
                  item.onChange
                    ? item.onChange(e, handleChange)
                    : handleChange(e)
                }
                value={values[item.name]}
                placeholder={item.placeholder}
                className={`input-field ${item.className}`}
                accept={item?.accept}
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
            {errors.description && touched.description && errors.description}
          </div>
          <ImageInputFormik
            name="image"
            placeholder="Enter the image"
            onChange={(e) => handleImageChange(e, handleChange)}
            style={{ gridArea: "imageInput" }}
            accept={".png, .jpg"}
            className="create-member-image-input"
            errors={errors}
            touched={touched}
          />
          <img
            src={image ? URL.createObjectURL(image) : imageExample}
            alt="images"
            className="profile-preview-image"
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
