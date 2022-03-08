import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../TableStyles.css';
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import {getNews} from '../../../Services/NewsApiServices'
import BasicAlert from '../../UI/Alerts/BasicAlert'

function Novedades(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNews();
                setNews(response);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, []);



    if(loading){
        return <SpinnerComponent />
    }

    if(error){
        return <BasicAlert />
    }

    const handleClickUpdate=()=>{}

    const handleClickDelete=()=>{}

    return(
        <section className="sectionTable">
            <div className='table-container-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                <Link to="/backoffice/news/create" className="btnAddTable">Crear</Link>
                            </td>
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Creado</th>
                            <th colSpan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mas de 5000 juguetes donados!</td>
                            <td><img src="http:\/\/ongapi.alkemy.org\/storage\/bfHgX3Nr8Q.png" alt="Img novedades"></img></td>
                            <td>2022-02-17T23:53:48.000000Z</td>
                            <td>
                                <button className="btnUpdateTable" onClick={handleClickUpdate} >Editar</button>
                            </td>
                            <td>    
                                <button className="btnDeleteTable" onClick={handleClickDelete} >Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mas de 5000 juguetes donados!</td>
                            <td><img src="http:\/\/ongapi.alkemy.org\/storage\/AOPPkDQDXx.jpeg" alt="Img novedades"></img></td>
                            <td>2022-02-17T23:53:48.000000Z</td>
                            <td>
                                <button className="btnUpdateTable" onClick={handleClickUpdate} >Editar</button>
                            </td>
                            <td>    
                                <button className="btnDeleteTable" onClick={handleClickDelete} >Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Novedades
