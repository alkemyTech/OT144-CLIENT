import React,{useState} from "react";
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";

const CategoriesForm = (props) => {

    const categories = props?.data
    const categoriesBtn = props?.btnCat //si es true viene del componente crear, si es false de actualziar
    const id = props?.data?.id
    const [initialValues, setInitialValues] = useState({
        name: categories?.name ? categories.name : '',
        description: categories?.description ? categories.description : '',
        image: React.createRef()
    })

    const [imgPost,setImgPost] = useState('')

    const bodyFormCategory = [    
    {
        name:initialValues.name, 
        description:initialValues.description, 
        image: imgPost,
    },
    {
        name:initialValues.name, 
        description:initialValues.description, 
    }]

    const [msjFormIncomplete, setMsjFormIncomplete] = useState(false)
    const [msjFormIncompleteImg, setMsjFormIncompleteImg] = useState(false)
    const [msjFormIncompleteDes, setMsjFormIncompleteDes] = useState(false)

    const [loandingForm,setLoandingForm] = useState(false)
    const [messageErrorCategory,setMessageErrorCategory] = useState(false)
    const [messageOkCategory,setMessageOkCategory] = useState(false)


    function getBase64(file) { 
        var reader = new FileReader(); 
        reader.readAsDataURL(file); 
        reader.onload = function () { 
            //console.log(reader.result); 
            setImgPost(reader.result)
            setMsjFormIncompleteImg(false)
        }; 
        reader.onerror = function (error) {
             console.log('Error: ', error);
        }; 
    }


    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
            setMsjFormIncomplete(false)
        } 
    }

    const handleCkreditor =(e,editor)=>{
        const data = editor.getData()
        setInitialValues({...initialValues, description: data})
        setMsjFormIncompleteDes(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick =()=>{
        setMessageErrorCategory(false)
        setMessageOkCategory(false)
        if(initialValues.name === '' || initialValues.name.length < 4){
            setMsjFormIncomplete(true)
        }
        else if(initialValues.description === ''){
            setMsjFormIncompleteDes(true)
        }
        else{
            if(categoriesBtn === true){
                if(imgPost === '' || !(/\.(jpg|png)$/i).test(initialValues.image?.current?.files[0].name)){
                    setMsjFormIncompleteImg(true)    
                }else{
                console.log('agregar')
                addCategory()
                }
            }else{
                if(imgPost !== ''){
                    if(!(/\.(jpg|png)$/i).test(initialValues.image?.current?.files[0].name)){
                        setMsjFormIncompleteImg(true)    
                    }else{
                    console.log('actualizar')
                    updateCategory(0) 
                    }
                }else{
                    updateCategory(1)  
                }    
            }
        }
    }



    const addCategory = async()=>{
        setLoandingForm(true)
        await axios.post('http://ongapi.alkemy.org/api/categories', bodyFormCategory[0])
        .then(res=>{
            console.log(res.data)
            if(res.data){
                setMessageOkCategory(true)
                setLoandingForm(false)
            }
        })
        .catch(error=>{
            console.log(error.message);
            setMessageErrorCategory(true)
            setLoandingForm(false)
        })
    }

    const updateCategory = async(numArray)=>{
        setLoandingForm(true)
        await axios.put(`http://ongapi.alkemy.org/api/categories/${id}`, bodyFormCategory[numArray])
        .then(res=>{
            console.log(res.data)
            if(res.data){
                setMessageOkCategory(true)
                setLoandingForm(false)
            }
        })
        .catch(error=>{
            console.log(error.message);
            setMessageErrorCategory(true)
            setLoandingForm(false)
        })
    }



    return (
        <>
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Title"></input>
            {msjFormIncomplete && 
                <p className="msjIncompleteForm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                Campo obligatorio y debe contener al menos 4 caracteres</p>
            }

            <CKEditor editor={ ClassicEditor } onChange={handleCkreditor} data={categories?.description ? categories.description : '' }/>
            {msjFormIncompleteDes && 
                <p className="msjIncompleteForm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                Campo obligatorio</p>
            }

            <input className="input-field" type="file" ref={initialValues.image} name='image' onChange={()=>getBase64(initialValues.image?.current?.files[0])}></input>
            {msjFormIncompleteImg && 
                <p className="msjIncompleteForm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                Campo obligatorio y debe ser formato .jpg o .png</p>
            }

            {loandingForm ?
                <p>Loanding</p>
            :
                <button className="submit-btn" type="submit" onClick={handleClick}>Send</button>
            }

            {messageErrorCategory &&
                <div>
                    <p>Error</p>
                </div>
            }
            {messageOkCategory &&
                <div>
                    <p>Tarea realizada</p>
                </div>
            }
        </form>
        {!categoriesBtn &&
            <img src={categories?.image} alt='img category'></img>
        }
        </>
    );
}
 
export default CategoriesForm;