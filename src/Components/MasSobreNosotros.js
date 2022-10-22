import React from 'react'

const iSeguridad = require("../img/icono1.svg").default;
const iMPrecio = require("../img/icono2.svg").default;
const iATiempo = require("../img/icono3.svg").default;

export const MasSobreNosotros = () => {
  return (
    <section className="contenedor seccion">
        <h2 className="fw-300 centrar-texto">Más sobre Nosotros</h2>

        <div className="iconos-nosotros">
            <div className="icono">
                <img src={iSeguridad} alt="Icono Seguridad"></img>
                <h3>Seguridad</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div className="icono">
                <img src={iMPrecio} alt="Icono Mejor Precio"></img>
                <h3>El mejor Precio </h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>

            <div className="icono">
                <img src={iATiempo} alt="Icono A Tiempo"></img>
                <h3>A tiempo</h3>
                <p>Corporis nihil possimus, iure officia labore commodi autem dolores numquam, quaerat vel eaque officiis magnam facilis enim? Ipsa consequuntur quidem sapiente distinctio!</p>
            </div>
        </div>  

    </section>
  )
}
