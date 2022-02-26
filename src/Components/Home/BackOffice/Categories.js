import { Link } from "react-router-dom"
import "./stylesTable.css"

export default function Categories() {

    const categories = [
        { id: 1, name: 'Categoria-1', createdAt: '2022-01-03' },
        { id: 2, name: 'Categoria-2', createdAt: '2022-01-20' },
        { id: 3, name: 'Categoria-3', createdAt: '2022-01-31' }
    ];

    return (
        <main>
            <Link to="/backoffice/categories/create">Crear</Link>
            <table className = "containerTable">
                <thead>
                    <th>Nombre</th>
                    <th>Creado</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {categories.map(category => {
                        return (
                            <tr>
                                <td>{category.name}</td>
                                <td>{category.createdAt}</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}