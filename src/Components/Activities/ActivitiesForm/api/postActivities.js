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
    console.log(postData);
  } catch (e) {
    alert("Error");
    console.log(e.message);
  }
};

export default postActivities;
