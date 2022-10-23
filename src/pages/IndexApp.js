import React from 'react'

import '../css/styles.css'
import '../css/normalize.css'

import aCasaLago from '../img/anuncio1.jpg'
import aTLujo from "../img/anuncio2.jpg"
import aCasaAlberca from "../img/anuncio3.jpg"
import eBlog1 from "../img/blog1.jpg"
import eBlog2 from "../img/blog2.jpg"
import { Footer } from '../components/Footer'
import { MasSobreNosotros } from '../components/MasSobreNosotros'
import { Head } from '../components/Head'
import { Link } from 'react-router-dom'



const iWC = require("../img/icono_wc.svg").default;
const iEstacionamiento = require("../img/icono_estacionamiento.svg").default;
const iDormitorio = require("../img/icono_dormitorio.svg").default;



export const IndexApp = () => {
  return (
    <html>

    <Head/>
    
    <body>
        
    <header class="site-header inicio">
        <div class="contenedor contenido-header">
            <div className='barra'>
                
            </div>
            <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </div>
    </header>
    
    <MasSobreNosotros/>


    <main className="contenedor">
        <h2 className="fw-300 centrar-texto">Casas y Depas en Venta</h2>

        <div className="contenedor-anuncios">
            <div className="anuncio">
                <img src={aCasaLago} alt="Anuncio Casa en el Lago"/>
                <div className="contenido-anuncios">
                    <h3>Casa de lujo en el Lago</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p className="precio">$3,000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iEstacionamiento} alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iDormitorio} alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <Link to="/anuncio.html" className="boton boton-naranja d-block">Ver Propiedad</Link>
                </div>
            </div>

            <div className="anuncio">
                <img src={aTLujo} alt="Anuncio Terminados de Lujo"></img>
                <div className="contenido-anuncios">
                    <h3>Casa Terminados de Lujo</h3>
                    <p>Casa con diseño moderno, así como tecnologia inteligente y amueblada </p>
                    <p className="precio">$2,000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iEstacionamiento} alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iDormitorio} alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <Link to="/anuncio.html" className="boton boton-naranja d-block">Ver Propiedad</Link>
                </div>
            </div>

            <div className="anuncio">
                <img src={aCasaAlberca} alt="Anuncio Casa con Alberca"></img>
                <div className="contenido-anuncios">
                    <h3>Casa con Alberca</h3>
                    <p>Casa con alberca y acabados de Lujo en la ciudad, excelente oportunidad</p>
                    <p className="precio">$3,000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li><img src={iWC} alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iEstacionamiento} alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src={iDormitorio} alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <Link to="/anuncio.html" className="boton boton-naranja d-block">Ver Propiedad</Link>
                </div>
            </div>
        </div>

        <div className="ver-todas">
            <Link to="/anuncios.html" className="boton boton-verde">Ver Todas</Link>
        </div>
    </main>

    <section className="imagen-contacto">
        <div className="contenedor contenido-contacto">
            <h2>Encuentra la casa de tus sueños</h2>
            <p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
            <Link to="/contacto.html" className="boton boton-naranja">Contáctanos</Link>
        </div>
    </section>

    <div className="seccion-inferior contenedor seccion">
        <section className="blog">
            <h3 className="centrar-texto fw-300">Nuestro Blog</h3>

            <article className="entrada-blog">
                <div className="imagen">
                    <img src={eBlog1} alt="Entrada de blog"></img>
                </div>
                <div className="texto-entrada">
                    <Link to="/entrada.html">
                        <h4>Terraza en el techo de tu casa</h4>
                    </Link>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                </div>
            </article>

            <article className="entrada-blog">
                <div className="imagen">
                    <img src={eBlog2} alt="Entrada de blog"></img>
                </div>
                <div className="texto-entrada">
                    <Link to="/entrada.html">
                        <h4>Guía para la decoración de tu hogar</h4>
                    </Link>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                </div>
            </article>
        </section>

        <section className="testimoniales">
            <h3 className="centrar-texto fw-300">Testimoniales</h3>
            <div className="testimonial">

                <blockquote>
                    El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                </blockquote>
                <p>- Jorge Luis Senjudo Alfonso</p>
            </div>
        </section>

    </div>
    
    <Footer/>
        
    </body>
    </html>    
  )
}
