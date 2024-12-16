import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const services = [
  {
    title: "Uñas en gel",
    description:
      "La aplicación de uñas en gel implica preparar la uña natural...",
    price: "40 SOLES",
    image:
      "https://m.media-amazon.com/images/I/51g9ICkCtfS._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Pestañas 1x1",
    description:
      "Extensiones que se aplican colocando una pestaña postiza sobre cada pestaña natural...",
    price: "30 SOLES",
    image:
      "https://monalico.com/storage//posts/20062020/9f8efa8f6d09c46ae497258d2c7dfdc4.jpg",
  },
  // Añade más servicios...
];

const Services = () => (
  <section id="servicios" className="menu contenedor">
    <h2>SERVICIOS</h2>
    <div className="platillos">
      {services.map((service, index) => (
        <div className="platillo" key={index}>
          <LazyLoadImage
            src={service.image}
            alt={service.title}
            effect="blur"
          />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <div className="precio">{service.price}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
