import React from 'react'
import { Footer } from '../components/Footer'
import { Head } from '../components/Head'

import destacada2 from "../img/destacada2.jpg"

export const EntradaApp = () => {
  return (
    <html>
        <Head/>

        <h1 class="fw-300 centrar-texto">Consejos para Tener una Alberca en tu casa sin gastar</h1>
        <img src={destacada2} alt="img destacada2"/>

    <main class="seccion contenedor contenido-centrado texto-entrada">
        <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi quia ea consequatur, fuga, impedit illum aperiam sapiente ad debitis delectus eum, optio est repellat eaque facere assumenda. Nihil molestiae vel minima repellendus ratione
            delectus illum esse, recusandae ipsa necessitatibus error perspiciatis iure magni quisquam perferendis ad harum modi veniam impedit labore itaque dolorem. Necessitatibus atque voluptatum consequuntur, modi neque cum commodi? Nisi vel provident
            iste reiciendis, modi velit ipsa excepturi cum, animi incidunt et! Et tempore minima quod deserunt consectetur laudantium sunt. Animi impedit omnis illum ut velit culpa suscipit praesentium voluptatum, at harum nisi id corrupti facere ea?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor temporibus a voluptate, molestias ex ad facilis impedit harum itaque vitae quam, corporis debitis iusto accusamus mollitia ab suscipit illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi quia ea consequatur, fuga, impedit illum aperiam sapiente ad debitis delectus eum, optio est repellat eaque facere assumenda. Nihil molestiae vel minima repellendus ratione
            delectus illum esse, recusandae ipsa necessitatibus error perspiciatis iure magni quisquam perferendis ad harum modi veniam impedit labore itaque dolorem. Necessitatibus atque voluptatum consequuntur, modi neque cum commodi? Nisi vel provident
            iste reiciendis, modi velit ipsa excepturi cum, animi incidunt et! Et tempore minima quod deserunt consectetur laudantium sunt. Animi impedit omnis illum ut velit culpa suscipit praesentium voluptatum, at harum nisi id corrupti facere ea?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor temporibus a voluptate, molestias ex ad facilis impedit harum itaque vitae quam, corporis debitis iusto accusamus mollitia ab suscipit illum?</p>
    </main>

    <Footer/>
    </html> 
  )
}
