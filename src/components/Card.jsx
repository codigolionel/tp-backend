import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='container'>
        <img className="imagens" src="https://www.canford.co.uk/images/itemimages/large/92-853_01.jpg" alt="neu1" />
        <div className='info'>
        <h3>Tipo:</h3>
        <p>Conexion</p>
        <p>Phtm Pwr</p></div>
        <button>Eliminar</button>
        <button>Editar</button>
    </div>
  )
}

export default Card