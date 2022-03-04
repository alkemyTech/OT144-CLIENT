import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import TitleComponent from "../title/TitleComponent";
import { getContact } from "./ServiceAPIContact";

const Contact = ({img, name, phone, email}) => {
  const [limitedData, setLimitedData] = useState([])

  useEffect(() => {
    getContact().then(response => {
      setLimitedData(response.data.data.slice(0,10))
    })
  }, [])  
 
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
