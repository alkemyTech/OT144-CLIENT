import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../Home/BackOffice/stylesTable.css"

const MemberList = () => {

    const [members, setMembers] = React.useState([])

    React.useEffect(() => {
        const fetchMembers = async () => {
            const result = await axios.get('http://ongapi.alkemy.org/api/members')
            console.log(result.data.data)
            setMembers(result.data.data)
        }
        fetchMembers()
    }, [])

    const deleteMember = () => {}
    const editMember = () => {}

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
                {members.map(member => (
                    <tr key={member.id} className='card-container'>
                        <td>{member.name}</td>
                        <td>
                            <img src={member.image} alt='thumbnail'/>
                        </td>
                        <td>
                            <button className="btnUpdateTable" onClick={() => editMember()}>
                                Edit
                            </button>
                            <button className="btnDeleteTable" onClick={() => deleteMember()}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default MemberList