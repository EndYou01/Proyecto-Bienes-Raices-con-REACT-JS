import React from 'react'
import '../css/styles.css'
import '../css/normalize.css'
import { Link, NavLink } from 'react-router-dom'
const logo = require("../img/logo.svg").default;

export const NavBar = () => {

  return (
    <header className="site-header">
        <div className="contenedor contenido-header">
            <div className="barra">
                <Link to="index.html">
                    <img src={logo} alt="Logotipo de Bienes Raices"></img></Link>

                <nav className="navegacion">
                    <NavLink to="/nosotros.html">Nosotros</NavLink>
                    <NavLink to="/anuncios.html">Anuncios</NavLink>
                    <NavLink to="/blog.html">Blog</NavLink>
                    <NavLink to="/contacto.html">Contacto</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}
