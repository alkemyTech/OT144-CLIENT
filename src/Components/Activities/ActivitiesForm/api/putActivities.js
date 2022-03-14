import axios from 'axios'

const putActivities = async (values) => {
	try {
		await axios.put(`http://ongapi.alkemy.org/api/activities/${values.id}`, {
			...values,
			name: values.name,
			description: values.description,
			image: values.image,
		})
		alert('La información se actualizo correctamente!')
	} catch (e) {
		alert('Error al actualizar la información!')
		console.log(e.message)
	}
}

export default putActivities
