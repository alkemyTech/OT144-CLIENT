import { useState } from "react";
import { Link } from "react-router-dom"
import "./stylesTable.css"

export default function Categories() {

    const [categories, setCategories] = useState([
        { id: 1, name: 'Categoria-1', createdAt: '2022-01-03' },
        { id: 2, name: 'Categoria-2', createdAt: '2022-01-20' },
        { id: 3, name: 'Categoria-3', createdAt: '2022-01-31' }
    ]);

    const handleClickUpdate = (id) => {}

    const handleClickDelete = (id) => {}

    return (
        <section className="novedadesSection">
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <Link to="/backoffice/categories/create" className="btnAddNovedades">Crear</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <th>Creado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => {
                        return (
                            <tr key = {category.id}>
                                <td>{category.name}</td>
                                <td>{category.createdAt}</td>
                                <td>
                                    <button className="btnUpdateNovedades" type = "submit" onClick = {() => handleClickUpdate(category.id)}>Editar</button>
                                    <button className="btnDeleteNovedades" type = "submit" onClick = {() => handleClickDelete(category.id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}