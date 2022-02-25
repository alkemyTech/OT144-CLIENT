import axios from "axios";

const postActivities = async (values) => {
  try {
    const postData = await axios.post(
      "http://ongapi.alkemy.org/public/api/activities",
      {
        ...values,
        id: values.id,
        name: values.name,
        description: values.description,
        image: values.image,
      }
    );
    alert('La información se envio correctamente!')
  } catch (e) {
    alert("Error al enviar la información!");
  }
};

export default postActivities;
