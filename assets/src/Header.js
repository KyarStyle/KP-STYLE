import React from "react";

const Header = () => (
  <header className="encabezado">
    <div className="contenido-header">
      <h2>KP - Un Estilo Único</h2>
      <video autoplay loop muted>
        <source src="assets/bg_video.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
);

export default Header;
