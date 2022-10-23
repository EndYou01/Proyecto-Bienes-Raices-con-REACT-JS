import React from 'react'

import '../css/styles.css'
import '../css/normalize.css'

import nosotros from '../img/nosotros.jpg'
import { Footer } from '../components/Footer';
import { MasSobreNosotros } from '../components/MasSobreNosotros';
import { Head } from '../components/Head';

export const Nosotros = () => {
  return (
    <html>
        
    <Head/>

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
