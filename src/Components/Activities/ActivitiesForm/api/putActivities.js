import axios from "axios";

const putActivities = async (values) => {
  try {
    const putData = await axios.put(
      `http://ongapi.alkemy.org/api/activities/${values.id}`,
      {
        ...values,
        name: values.name,
        description: values.description,
        image: values.image,
      }
    );
    console.log(putData);
  } catch (e) {
    alert("Error al actualizar la información!");
    console.log(e.message);
  }
};

export default putActivities;
