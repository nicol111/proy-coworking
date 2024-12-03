import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef(null);

  const alternarMenu = () => setMenuAbierto(!menuAbierto);

  const cerrarMenu = () => setMenuAbierto(false);

  useEffect(() => {
    const manejarClickFuera = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        cerrarMenu();
      }
    };

    document.addEventListener("mousedown", manejarClickFuera);
    return () => {
      document.removeEventListener("mousedown", manejarClickFuera);
    };
  }, []);

  return (
    <nav className="barra-navegacion">
      <div className="contenedor">
        <Link className="marca-navbar" to="/">
          Coworking_
        </Link>
        <button
          className="boton-navbar-toggler"
          type="button"
          onClick={alternarMenu}
          aria-expanded={menuAbierto}
          aria-label="Alternar navegación"
        >
          <span className="icono-navbar-toggler"></span>
        </button>
        <div
          ref={menuRef}
          className={`menu-hamburguesa ${menuAbierto ? "menu-activo" : ""}`}
        >
          <ul className="elementos-navbar">
            {!isAuthenticated ? (
              <>
                <div className="menu-izquierda">
                  <li className="elemento-navbar">
                    <Link
                      className="enlace-navbar"
                      to="/login"
                      onClick={cerrarMenu}
                    >
                      Iniciar Sesión
                      <i className="bi bi-box-arrow-in-right"></i>{" "}
                    </Link>
                  </li>
                  <li className="elemento-navbar">
                    <Link
                      className="enlace-navbar"
                      to="/register"
                      onClick={cerrarMenu}
                    >
                      Registrarse
                      <i className="bi bi-person-plus"></i>{" "}
                    </Link>
                  </li>
                </div>
              </>
            ) : (
              <>
                <li className="elemento-navbar">
                  <Link className="enlace-navbar" to="/" onClick={cerrarMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="elemento-navbar">
                  <Link
                    className="enlace-navbar"
                    to="/about"
                    onClick={cerrarMenu}
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="elemento-navbar">
                  <Link
                    className="enlace-navbar"
                    to="/reserva"
                    onClick={cerrarMenu}
                  >
                    Reservas
                  </Link>
                </li>
                <li className="elemento-navbar profile-menu">
                  <span className="profile-link">Perfil</span>
                  <ul className="submenu">
                    <li>
                      <button
                        className="submenu-item"
                        onClick={() => {
                          cerrarMenu();
                          handleLogout();
                        }}
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="elemento-navbar">
                  <Link
                    className="enlace-navbar"
                    to="/contacto"
                    onClick={cerrarMenu}
                  >
                    Contacto
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
