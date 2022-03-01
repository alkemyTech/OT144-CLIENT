import React from "react";
import {Link} from "react-router-dom";
import '../../TableStyles.css';

function Novedades(){

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