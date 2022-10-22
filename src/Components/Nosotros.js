import React from 'react'

import '../css/styles.css'
import '../css/normalize.css'

import nosotros from '../img/nosotros.jpg'

const iSeguridad = require("../img/icono1.svg").default;
const iMPrecio = require("../img/icono2.svg").default;
const iATiempo = require("../img/icono3.svg").default;

export const Nosotros = () => {
  return (
    <html>
        
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nosotros</title>

        <link rel="stylesheet" href="src\css\normalize.css"/>
        <link rel="stylesheet" href="src\css\styles.css"/>

    </head>

    <body>

        {/* NavBar */}

    <main class="contenedor">
        <h1 class="fw-300 centrar-texto">Conoce Sobre Nosotros</h1>
        <div class="contenido-nosotros">
            <div class="imagen">
                <img src={nosotros} alt="Imagen nosotros"/>
            </div>
            <div class="texto-nosotros">
                <blockquote>25 Años de Experiencia</blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, illo reiciendis? Magnam aspernatur omnis porro fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad architecto praesentium nisi tempora veniam adipisci exercitationem in nulla tenetur quidem odio nobis unde molestiae, minima aliquam deserunt libero dolorum?</p>
            </div>
        </div>
    </main>

    <section class="contenedor seccion">
        <h2 class="fw-300 centrar-texto">Más sobre Nosotros</h2>

        <div class="iconos-nosotros">
            <div class="icono">
                <img src={iSeguridad} alt="Icono Seguridad"/>
                <h3>Seguridad</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div class="icono">
                <img src={iMPrecio} alt="Icono Mejor Precio"/>
                <h3>El mejor Precio </h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div class="icono">
                <img src={iATiempo} alt="Icono A Tiempo"/>
                <h3>A tiempo</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>
        </div>
        {/* <!--Iconos Nosotros--> */}

    </section>



    <footer class="site-footer seccion">
        <div class="contenedor contenedor-footer">
            <nav class="navegacion">
                <a href="nosotros.html">Nosotros</a>
                <a href="anuncios.html">Anuncios</a>
                <a href="blog.html">Blog</a>
                <a href="contacto.html">Contacto</a>
            </nav>
            <p class="copyrigth">Todos los derechos reservados 2022 &copy;</p>
        </div>
    </footer>
    </body>

    </html>
  )
}
