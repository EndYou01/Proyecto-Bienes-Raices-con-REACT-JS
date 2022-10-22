import React from 'react'


import aCasaLago from '../img/anuncio1.jpg'
import aTLujo from "../img/anuncio2.jpg"
import aCasaAlberca from "../img/anuncio3.jpg"
import aCasaFCiudad from "../img/anuncio4.jpg"
import aCasaFBosque from "../img/anuncio5.jpg"
import aCasaFAlberca2 from "../img/anuncio6.jpg"

import iWC from "../img/icono_wc.svg"
import iE from "../img/icono_estacionamiento.svg"
import iD from "../img/icono_dormitorio.svg"
import { Footer } from '../components/Footer'

export const AnunciosApp = () => {
  return (
    <html>
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Anuncios</title>

            <link rel="stylesheet" href="../css/normalize.css"/>
            <link rel="stylesheet" href="../css/styles.css"/>

        </head>

    <body>

    {/* NavBar */}

    <main class="contenedor">
        <h2 class="fw-300 centrar-texto">Casas y Depas en Venta</h2>

        <div class="contenedor-anuncios">
            <div class="anuncio">
                <img src={aCasaLago} alt="Anuncio Casa en el Lago"/>
                <div class="contenido-anuncios">
                    <h3>Casa de lujo en el Lago</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$3,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src={aTLujo} alt="Anuncio Terminados de Lujo"/>
                <div class="contenido-anuncios">
                    <h3>Casa Terminados de Lujo</h3>
                    <p>Casa con diseño moderno, así como tecnologia inteligente y amueblada </p>
                    <p class="precio">$2,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src={aCasaAlberca} alt="Anuncio Casa con Alberca"/>
                <div class="contenido-anuncios">
                    <h3>Casa con Alberca</h3>
                    <p>Casa con alberca y acabados de Lujo en la ciudad, excelente oportunidad</p>
                    <p class="precio">$3,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src={aCasaFCiudad} alt="Casa fuera de la ciudad"/>
                <div class="contenido-anuncios">
                    <h3>Casa fuera de la ciudad</h3>
                    <p>Casa fuera de la ciudad con excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$2,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src={aCasaFBosque} alt="Casa frente al Bosque"/>
                <div class="contenido-anuncios">
                    <h3>Casa frente al Bosque</h3>
                    <p>Casa frente al bosque con excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$4,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src={aCasaFAlberca2} alt="Casa con Alberca"/>
                <div class="contenido-anuncios">
                    <h3>Casa con Alberca</h3>
                    <p>Casa con alberca y excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$3,500,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li><img src={iE} alt="icono estacionamineto"/>
                            <p>3</p>
                        </li>
                        <li><img src={iD} alt="icono dormitorio"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>
        </div>


    </main>


    <Footer/>
</body>
    </html>
    )
}
