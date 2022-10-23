import React from 'react'
import { Footer } from '../components/Footer'

import { Link } from 'react-router-dom'

import eBlog1 from "../img/blog1.jpg"
import eBlog2 from "../img/blog2.jpg"
import eBlog3 from "../img/blog3.jpg"
import eBlog4 from "../img/blog4.jpg"
import { Head } from '../components/Head'

export const BlogApp = () => {
  return (
    <html>
    <Head/>

<body>

    {/* NavBar */}


    <main class="seccion contenedor contenido-centrado">
        <h1 class="fw-300 centrar-texto">Nuestro Blog</h1>


        <article class="entrada-blog">
            <div class="imagen">
                <img src={eBlog1} alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <Link to="/entrada.html">
                    <h4>Terraza en el techo de tu casa</h4>
                </Link>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src={eBlog2} alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <Link to="/entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </Link>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src={eBlog3} alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <Link to="/entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </Link>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src={eBlog4} alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <Link to="/entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </Link>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>
    </main>

    <Footer/>
</body>
    </html>
    )
}
