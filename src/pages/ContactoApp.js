import React from 'react'
import { Footer } from '../components/Footer'
import { Head } from '../components/Head'

import destacada3 from "../img/destacada3.jpg"

export const ContactoApp = () => {
  return (
    <html>
        <Head/>

        <h1 class="fw-300 centrar-texto">Contacto</h1>
    <img src={destacada3} alt="img destacada2"/>

    <main class="contenedor seccion contenido-centrado">
        <h2 class="fw-300 centrar-texto">Llenar el formulario de Contacto</h2>

        <form class="contacto" action="">
            <fieldset>
                <legend>Informacion Personal</legend>

                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Tu nombre"/>

                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Tu Correo Electronico" required/>

                <label for="telefono">Telefono:</label>
                <input type="tel" id="telefono" placeholder="Tu telefono" required/>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje"></textarea>

            </fieldset>

            <fieldset>
                <legend>Informacion sobre Propiedad</legend>

                <label for="opciones">Vende o Compra:</label>
                <select id="opciones">
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="Compra">Compra</option>
                    <option value="Vende">Vende</option>
                </select>

                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" min="0" max="10" step="5"/>

            </fieldset>

            <fieldset>
                <legend>Contacto</legend>
                <p>Como desea ser Contactado:</p>

                <div class="forma-contacto">
                    <label for="celular">Teléfono</label>
                    <input type="radio" name="contacto" value="telefono" id="celular"/>

                    <label for="correo">Email:</label>
                    <input type="radio" name="contacto" value="correo" id="" correo/>
                </div>

                <p>Si eligio telefono, elija la fecha y hora</p>
                <label for="fecha">Fecha:</label>
                <input type="date" id="fecha"/>

                <label for="hora">Hora:</label>
                <input type="time" id="hora" min="9:00" max="18:00"/>

            </fieldset>

            <input type="submit" value="Enviar" class="boton boton-verde"/>
        </form>

    </main>

    <Footer/>
    </html>
  )
}
