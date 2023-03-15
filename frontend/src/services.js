import React, { useEffect, useState } from "react";
import "./services.css";
import { Link } from "react-router-dom";

function Services() {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch("/api/services")
        .then(res => res.json())
        .then(res => setServices(res.services))
        .catch(console.error);
    }, [setServices]);
    return (
        <div className="services">
        <h1>Services</h1>
        <div className="services__list">
            {services &&
            services.map(service => (
                <div className="services__list__item" key={service.id}>
                <Link to={`/services/${service.id}`}>
                    <h2>{service.title}</h2>
                </Link>
                <p>{service.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
}