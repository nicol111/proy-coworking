
import React from "react";
import "./AboutUs.scss"; 
import bannerImage1 from "../assets/imagenes/banner2.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">

      <section className="history-mission">
        <div className="container">
          <div className="row-align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={bannerImage1}
                alt="Historia y Misión"
                className="about-image"
              />
            </div>

            
            <div className="col-md-6">
              <h2 className="section-title">Nuestra Historia</h2>
              <p className="section-text">
                Fundados con el objetivo de crear un espacio colaborativo para
                emprendedores, freelancers y empresas, nuestro coworking ha
                crecido rápidamente como uno de los lugares más innovadores de
                la ciudad. Nos enfocamos en proporcionar un entorno flexible,
                dinámico y de apoyo para que nuestros miembros puedan prosperar
                en un ambiente único.
              </p>
              <h2 className="section-title">Nuestra Misión</h2>
              <p className="section-text">
                Nuestra misión es ser un catalizador para la creatividad, la
                innovación y la colaboración. Brindamos a nuestros miembros un
                espacio donde puedan compartir ideas, aprender unos de otros y
                construir juntos el futuro de sus negocios.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="values">
        <div className="container">
          <h2 className="section-title text-center">Nuestros Valores</h2>
          <div className="row">
            <div className="col-md-4 value-card">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Colaboración</h3>
              <p>
                Creemos en el poder del trabajo en equipo y el intercambio de
                ideas entre nuestros miembros.
              </p>
            </div>
            <div className="col-md-4 value-card">
              <div className="icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovación</h3>
              <p>
                Fomentamos un entorno creativo donde las ideas frescas y la
                innovación son clave para el éxito.
              </p>
            </div>
            <div className="col-md-4 value-card">
              <div className="icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Compromiso</h3>
              <p>
                Estamos comprometidos a brindar un espacio de trabajo que
                inspire a nuestros miembros a alcanzar sus metas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
