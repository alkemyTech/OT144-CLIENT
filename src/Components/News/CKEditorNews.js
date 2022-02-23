import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorNews = ({ field, form }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={field.value}
      onChange={(event, editor) => {
        const data = editor.getData();
        //Setting information in the form state
        form.setFieldValue(field.name, data);
      }}
      onBlur={() => {
        //If focus is lost, the editor is set to touched
        form.setFieldTouched(field.name, true);
      }}
    />
  );
};

export default CKEditorNews;
