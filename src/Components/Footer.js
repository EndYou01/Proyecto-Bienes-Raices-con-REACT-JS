import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="site-footer seccion">
    <div className="contenedor contenedor-footer">
        <nav className="navegacion">
            <NavLink to="/nosotros.html">Nosotros</NavLink>
            <NavLink to="/anuncios.html">Anuncios</NavLink>
            <NavLink to="/blog.html">Blog</NavLink>
            <NavLink to="/contacto.html">Contacto</NavLink>
        </nav>
        <p className="copyrigth">Todos los derechos reservados 2022 &copy;</p>
    </div>
</footer>
    )
}
