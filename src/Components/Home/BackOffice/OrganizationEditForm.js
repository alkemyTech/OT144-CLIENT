import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function OrganizationEditForm() {
    const [values, setValues] = useState({
        name: '',
        logo: '',
        shortDescription: '',
        longDescription: '',
        socialNetworkLinks: []
    });

    const handleChangeName = (event) => {
        setValues({...values, name:event.target.value})
    }

    const handleChangeLongDescription = (event) => {
        setValues({...values, longDescription:event.target.value})
    }

    console.log(values);

    return (
        <form>
            <input type="text" name="name" value={values.name} onChange={handleChangeName} placeholder="Enter organization name" />
            <div>
                Upload a logo: 
                <input type="file" name="logo" id="inputBox" accept=".png, .jpg"/>
            </div>
            <div>
                Enter a short description: 
            <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log( {editor} );
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            </div>
            <input type="text" name="longDescription" value={values.longDescription} onChange={handleChangeLongDescription} placeholder="Enter a long description" />
            <input type="text" name="socialNetworkLinks" value={values.socialNetworkLinks} placeholder="Enter social network link" />
            <button type="submit">Send</button>
        </form>
    )
}