import React from 'react'
import { Link } from 'react-router-dom'
import '../TableStyles.css';

const MemberList = () => {

    const handleClickUpdate = () => {}
    const handleClickDelete = () => {}

    return (
        <section className='sectionTable'>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <h1 className='title'>Listado de Miembros</h1>
                        </td>
                        <td>
                            <button className='btnAddTable'
                                onClick={() => {<Link to="/backoffice/members/create">Nuevo Miembro</Link>}}
                            >
                                Nuevo Miembro
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='card-container'>
                        <td>Miembro 1</td>
                        <td>
                            <img src={'/images/SomosMas.png'} alt='thumbnail'/>
                        </td>
                        <td>
                            <button className="btnUpdateTable" onClick={() => handleClickUpdate()}>
                                Edit
                            </button>
                            <button className="btnDeleteTable" onClick={() => handleClickDelete()}>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default MemberList