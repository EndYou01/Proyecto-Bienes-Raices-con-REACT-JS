import React from 'react'
import { Footer } from '../components/Footer'

export const BlogApp = () => {
  return (
    <html>
        <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Blog</title>

    <link rel="stylesheet" href="../css/normalize.css"/>
    <link rel="stylesheet" href="../css/styles.css"/>

</head>

<body>

    {/* NavBar */}


    <main class="seccion contenedor contenido-centrado">
        <h1 class="fw-300 centrar-texto">Nuestro Blog</h1>


        <article class="entrada-blog">
            <div class="imagen">
                <img src="../img/blog1.jpg" alt="Entrada de blog"/>
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
                <img src="../img/blog2.jpg" alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <a href="entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </a>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src="../img/blog3.jpg" alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <a href="entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </a>
                <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
            </div>
        </article>

        <article class="entrada-blog">
            <div class="imagen">
                <img src="../img/blog4.jpg" alt="Entrada de blog"/>
            </div>
            <div class="texto-entrada">
                <a href="entrada.html">
                    <h4>Guía para la decoración de tu hogar</h4>
                </a>
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
