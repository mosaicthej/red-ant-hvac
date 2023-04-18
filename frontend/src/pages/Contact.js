import React, { useEffect, useState } from "react";

function Contact() {
    const [contact, setContact] = useState();
    useEffect(() => {
        fetch("/api/contact")
        .then(res => res.json())
        .then(res => setContact(res.contact))
        .catch(console.error);
    }, [setContact]);
    return (
        <div className="contact">
        <h1>Contact Us</h1>
        <div className="contact__list">
            {contact &&
            contact.map(contact => (
                <div className="contact__list__item" key={contact.id}>
                <h2>{contact.title}</h2>
                <p>{contact.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Contact;