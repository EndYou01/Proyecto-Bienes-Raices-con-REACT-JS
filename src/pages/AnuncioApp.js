import React from 'react'
import { Footer } from '../components/Footer'
import { Head } from '../components/Head'

import destacada from "../img/destacada.jpg"

import iWC from "../img/icono_wc.svg"
import iE from "../img/icono_estacionamiento.svg"
import iD from "../img/icono_dormitorio.svg"

export const AnuncioApp = () => {
  return (
    <html>
        <Head/>

        <h1 class="fw-300 centrar-texto">Casa en Venta en la Playa</h1>
        <img src={destacada} alt="Imagen Anuncio"/>

        <main class="contenedor seccion contenido-centrado">
        <div class="barra">
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
        </div>

        <div class="texto-anuncio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi quia ea consequatur, fuga, impedit illum aperiam sapiente ad debitis delectus eum, optio est repellat eaque facere assumenda. Nihil molestiae vel minima repellendus ratione
                delectus illum esse, recusandae ipsa necessitatibus error perspiciatis iure magni quisquam perferendis ad harum modi veniam impedit labore itaque dolorem. Necessitatibus atque voluptatum consequuntur, modi neque cum commodi? Nisi vel provident
                iste reiciendis, modi velit ipsa excepturi cum, animi incidunt et! Et tempore minima quod deserunt consectetur laudantium sunt. Animi impedit omnis illum ut velit culpa suscipit praesentium voluptatum, at harum nisi id corrupti facere
                ea?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor temporibus a voluptate, molestias ex ad facilis impedit harum itaque vitae quam, corporis debitis iusto accusamus mollitia ab suscipit illum?</p>
        </div>
    </main>

    <Footer/>
    </html>
  )
}
