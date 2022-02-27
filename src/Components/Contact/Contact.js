import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import TitleComponent from "../title/TitleComponent";

const Contact = ({img, name, phone, email}) => {
  
  return (

    <div className="contact-container">
      <TitleComponent 
        title="Contacto"
        img={img}
      />

      <div>
        <p> Nombre:<span> {name} </span> </p>
        <p> Email: <span> {email} </span></p>
        <p> Phone: <span> {phone} </span>  </p>
      </div>

      <h3 className="subtitle">Contactanos</h3>

     <ContactForm />
    </div>
  );
};

export default Contact;
