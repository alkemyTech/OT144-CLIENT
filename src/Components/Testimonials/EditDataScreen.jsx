import React from 'react'
import { getAllOrganizationData, updateOrganizationData } from '../../Services/organizationService'

export default function EditDataScreen() {

	const [data, setData] = React.useState([])

	React.useEffect(() => {
		const getOrganizationData = async () => {
			const response = await getAllOrganizationData();
			setData(response.data);
		}
		getOrganizationData();
	}, [])

	const handleChange = (e) => {
		setData({
			...data,
			data: {
				...data,
				[e.target.name]: e.target.value
			}
		})
	}

	const handleEdit = async (e) => {
		e.preventDefault()
		await updateOrganizationData(data.data);
	}

	return (
		<div>
			<form className='form-container' onSubmit={handleEdit}>

				<label className="name">Edita el nombre</label>
				<input type="text" className='input-field' name="name" id="name"
					defaultValue={data.data?.name || ''} onChange={(e) => handleChange(e)} />

				<label className="image">Cambia la imagen</label>
				<input type="file" className='input-field' name="logo" id="image" onChange={(e) => handleChange(e)} />

				<label className="name">Edita la descripción</label>
				<input type="text" className='input-field' name="short_description" id="description"
					defaultValue={data.data?.short_description || ''} onChange={(e) => handleChange(e)} />

				<button className='submit-btn'>Guardar Cambios</button>
			</form>
		</div>
	)
}
