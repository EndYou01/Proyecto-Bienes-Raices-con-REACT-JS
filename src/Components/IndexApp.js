import React from 'react'

export const IndexApp = () => {
  return (

    <>
    <head>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Index</title>

        <link rel="stylesheet" href="../css/normalize.css"></link>
        <link rel="stylesheet" href="../css/styles.css"></link>
    </head>
    
    <body>
    <header class="site-header inicio">
        <div class="contenedor contenido-header">
            <div class="barra">
                <a href="index.html">
                    <img src="../img/logo.svg" alt="Logotipo de Bienes Raices"></img></a>

                <nav class="navegacion">
                    <a href="nosotros.html">Nosotros</a>
                    <a href="anuncios.html">Anuncios</a>
                    <a href="blog.html">Blog</a>
                    <a href="contacto.html">Contacto</a>
                </nav>
            </div>

            <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </div>
        {/* <!--Contenedor--> */}
    </header>

    <section class="contenedor seccion">
        <h2 class="fw-300 centrar-texto">Más sobre Nosotros</h2>

        <div class="iconos-nosotros">
            <div class="icono">
                <img src="../img/icono1.svg" alt="Icono Seguridad"></img>
                <h3>Seguridad</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div class="icono">
                <img src="../img/icono2.svg" alt="Icono Mejor Precio"></img>
                <h3>El mejor Precio </h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div class="icono">
                <img src="../img/icono3.svg" alt="Icono A Tiempo"></img>
                <h3>A tiempo</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>
        </div>
        {/* <!--Iconos Nosotros--> */}

    </section>


    <main class="contenedor">
        <h2 class="fw-300 centrar-texto">Casas y Depas en Venta</h2>

        <div class="contenedor-anuncios">
            <div class="anuncio">
                <img src="../img/anuncio1.jpg" alt="Anuncio Casa en el Lago"></img>
                <div class="contenido-anuncios">
                    <h3>Casa de lujo en el Lago</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p class="precio">$3,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src="../img/icono_wc.svg" alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_estacionamiento.svg" alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_dormitorio.svg" alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src="../img/anuncio2.jpg" alt="Anuncio Terminados de Lujo"></img>
                <div class="contenido-anuncios">
                    <h3>Casa Terminados de Lujo</h3>
                    <p>Casa con diseño moderno, así como tecnologia inteligente y amueblada </p>
                    <p class="precio">$2,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src="../img/icono_wc.svg" alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_estacionamiento.svg" alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_dormitorio.svg" alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>

            <div class="anuncio">
                <img src="../img/anuncio3.jpg" alt="Anuncio Casa con Alberca"></img>
                <div class="contenido-anuncios">
                    <h3>Casa con Alberca</h3>
                    <p>Casa con alberca y acabados de Lujo en la ciudad, excelente oportunidad</p>
                    <p class="precio">$3,000,000</p>

                    <ul class="iconos-caracteristicas">
                        <li><img src="../img/icono_wc.svg" alt="icono wc"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_estacionamiento.svg" alt="icono estacionamineto"></img>
                            <p>3</p>
                        </li>
                        <li><img src="../img/icono_dormitorio.svg" alt="icono dormitorio"></img>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" class="boton boton-naranja d-block">Ver Propiedad</a>
                </div>
            </div>
        </div>

        <div class="ver-todas">
            <a href="anuncios.html" class="boton boton-verde">Ver Todas</a>
        </div>
    </main>

    <section class="imagen-contacto">
        <div class="contenedor contenido-contacto">
            <h2>Encuentra la casa de tus sueños</h2>
            <p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
            <a href="contacto.html" class="boton boton-naranja">Contáctanos</a>
        </div>
    </section>

    <div class="seccion-inferior contenedor seccion">
        <section class="blog">
            <h3 class="centrar-texto fw-300">Nuestro Blog</h3>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="../img/blog1.jpg" alt="Entrada de blog"></img>
                </div>
                <div class="texto-entrada">
                    <a href="entrada.html">
                        <h4>Terraza en el techo de tu casa</h4>
                    </a>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                </div>
            </article>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="../img/blog2.jpg" alt="Entrada de blog"></img>
                </div>
                <div class="texto-entrada">
                    <a href="entrada.html">
                        <h4>Guía para la decoración de tu hogar</h4>
                    </a>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                </div>
            </article>
        </section>

        <section class="testimoniales">
            <h3 class="centrar-texto fw-300">Testimoniales</h3>
            <div class="testimonial">

                <blockquote>
                    El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                </blockquote>
                <p>- Jorge Luis Senjudo Alfonso</p>
            </div>
        </section>

    </div>
    {/* <!--Seccion-inferior contenedor--> */}

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
    </>    
  )
}
