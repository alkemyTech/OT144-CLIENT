import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../TableStyles.css';
import SpinnerComponent from '../../UI/spinner/SpinnerComponent'
import BasicAlert from '../../UI/Alerts/BasicAlert'
import { store } from "../../../app/store";
import { getNews, deleteNews } from "../../../Services/NewsApiServices";
import { setNewsAction, deleteNewsAction } from "../../../actions/actions";


function Novedades() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dataNews, setDataNews] = useState([])//news a renderizar con el loading

    useEffect(() => {
        try {
            (async () => {
                const response = await getNews();
                store.dispatch(setNewsAction(response.data.data))
                setDataNews(store.getState().news.news)
                setLoading(false);
            })()
        }
        catch (error) {
            setError(true);
        }
    }, [])  

    if(loading){
        return <SpinnerComponent />
    }

    if(error){
        return <BasicAlert />
    }

    const fetchDeleteNews = (id) => {
        try {
            (async () => {
                await deleteNews(id);
                store.dispatch(deleteNewsAction(id))
                setDataNews(store.getState().news.news);
            })()
        }
        catch (error) {
            setError(true);
        }
    }

    const handleClickDelete = (event) => {
        fetchDeleteNews(event)
    }

    return (
        <section className="sectionTable">
            <div className='table-container-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                <Link to="/create-news" className="btnAddTable">Crear</Link>
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
                        {dataNews.length > 0 ? dataNews.map((news) => {
                            return (
                                <tr key={news.id}>
                                    <td>{news.name}</td>
                                    <td><img src={news.image}></img></td>
                                    <td>{news.created_at}</td>
                                    <td>
                                        <Link to="/create-news">
                                            <button id={news.id} className="btnUpdateTable" >Editar</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button id={news.id} className="btnDeleteTable" onClick={() => handleClickDelete(news.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Novedades
