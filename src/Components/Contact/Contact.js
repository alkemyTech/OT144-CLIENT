import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import TitleComponent from "../title/TitleComponent";
import { getContact } from "../../Services/ServiceAPIContact";
import BasicAlert from '../../UI/Alerts/BasicAlert';

const Contact = ({img, name, phone, email}) => {

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      getContact();
    } catch (error) {
      setError(true);
    }
  }, []);

  if(error) {
    return <BasicAlert />
  }
 
  return (
    <div className="contact-container">
      <TitleComponent 
        title="Contacto"
        img={img}
      />

      <ul className="contact-list">
        <li> Nombre:<span> {name} </span> </li>
        <li> Email: <span> {email} </span></li>
        <li> Phone: <span> {phone} </span>  </li>
      </ul>

      <h3 className="subtitle">Contactanos</h3>

     <ContactForm />
    </div>
  );
};

export default Contact;
