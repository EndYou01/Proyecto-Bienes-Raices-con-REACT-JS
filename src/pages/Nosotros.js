import React from 'react'

import '../css/styles.css'
import '../css/normalize.css'

import nosotros from '../img/nosotros.jpg'
import { Footer } from '../components/Footer';
import { MasSobreNosotros } from '../components/MasSobreNosotros';

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

    <MasSobreNosotros/>



    <Footer/>
    </body>

    </html>
  )
}
