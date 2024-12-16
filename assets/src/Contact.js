import React from "react";

const Contact = () => (
  <section id="contacto" className="formulario-contacto contenedor">
    <div className="informacion-contacto">
      <h3>Contáctanos</h3>
      <p>
        <i className="fas fa-map-marker-alt"></i> Retes
      </p>
      <p>
        <i className="fas fa-envelope"></i> jotrax17@gmail.com
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> 936075917
      </p>
    </div>
    <form className="formulario">
      <div className="input-formulario">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" placeholder="Escribe tu nombre" id="nombre" required />
      </div>
      <div className="input-formulario">
        <label htmlFor="correo">Correo</label>
        <input type="email" placeholder="ejemplo@ejemplo.com" id="correo" required />
      </div>
      <div className="input-formulario">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea placeholder="Describe tu solicitud..." id="mensaje" required></textarea>
      </div>
      <button type="submit" className="btn btn-rojo">Enviar</button>
    </form>
  </section>
);

export default Contact;
