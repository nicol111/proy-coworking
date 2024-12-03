import React from "react";
import Testimonials from "../components/Testimonials";
import bannerImage from "../assets/imagenes/banner3.jpg";
import EspaciosPrivadosImg from "../assets/imagenes/espaciosprivados.jpg";
import EspaciosCompartidosImg from "../assets/imagenes/espacioscompartidos.jpg";
import SalasReunionImg from "../assets/imagenes/salasdereunion.jpg";
import "./Home.scss";

const Home = ({ isAuthenticated }) => {
  return (
    <div className="home-page">
      <header
        className="hero-section text-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="container">
          <h1 className="hero-title">
            {isAuthenticated
              ? "Bienvenido de nuevo a nuestra plataforma"
              : "Bienvenido a Nuestro Coworking"}
          </h1>
          {!isAuthenticated && (
            <p className="hero-subtitle">
              Un espacio de trabajo flexible y colaborativo.
            </p>
          )}
        </div>
      </header>

      
      <section className="services text-center">
        <div className="container">
          <h2 className="section-title">Servicios</h2>
          <div className="row">
           
            <div className="col-md-4 service-card">
              <div className="service-image">
                <img
                  src={EspaciosPrivadosImg}
                  alt="Espacios Privados"
                  className="img-fluid"
                />
              </div>
              <h3>Espacios Privados</h3>
              <p>
                Oficinas privadas con todas las comodidades necesarias para
                trabajar en privado.
              </p>
            </div>
           
            <div className="col-md-4 service-card">
              <div className="service-image">
                <img
                  src={EspaciosCompartidosImg}
                  alt="Espacios Compartidos"
                  className="img-fluid"
                />
              </div>
              <h3>Espacios Compartidos</h3>
              <p>
                Ideal para freelancers o equipos pequeños que necesitan un
                ambiente colaborativo.
              </p>
            </div>
           
            <div className="col-md-4 service-card">
              <div className="service-image">
                <img
                  src={SalasReunionImg}
                  alt="Salas de Reunión"
                  className="img-fluid"
                />
              </div>
              <h3>Salas de Reunión</h3>
              <p>
                Salas equipadas para videollamadas o reuniones presenciales con
                todas las facilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center">
        <div className="container">
          <h2 className="section-title">Testimonios</h2>
          <Testimonials />
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <p>© 2024 Coworking | Todos los derechos reservados</p>
          <p>Nicol Mayra Ajata Canaviri</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
