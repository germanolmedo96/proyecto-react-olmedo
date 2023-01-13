import React, { useState } from 'react'
import { Factura } from './Factura'


export const Checkout = () => {
  const [input, setInput] = useState({
    nombre:"",
    apellido:"",
    direccion:"",
    codigoPostal:"",
    ciudad:"",
    pais:"",
    telefono:""
  })


  const [ next, setNext ] = useState(false)

  const handlesubmit  = (e)=>{
    e.preventDefault()
    setNext(true)
  }

  const handleChange = (e) =>{
    setInput((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  return (
    <div>
      {
        !next?(
      <form onSubmit={handlesubmit}>
        <h3>Nombre</h3>
        <input
         type="text"
         value={input.nombre}
         name="nombre"
         onChange={handleChange}
        />
        <h3>Apellido</h3>
        <input
        type="text"
        value={input.apellido}
        name="apellido"
        onChange={handleChange}
        />
        <h3>Direccion</h3>
        <input
        type="text"
        value={input.direccion}
        name="direccion"
        onChange={handleChange}
        />
        <h3>Codigo postal</h3>
        <input
        type="number"
        value={input.codigoPostal}
        name="codigoPostal"
        onChange={handleChange}
        />
        <h3>Ciudad</h3>
        <input
        type="text"
        value={input.ciudad}
        name="ciudad"
        onChange={handleChange}
        />
        <h3>Pais</h3>
        <input
        type="text"
        value={input.pais}
        name="pais"
        onChange={handleChange}
        />
        <h3>Telefono</h3>
        <input
        type="number"
        value={input.telefono}
        name="telefono"
        onChange={handleChange}
        />
        <button
        type='submit'
        >
          pagar
        </button>
        </form>

        ):
        (
          <Factura {...input}/>
        )
      }
    </div>
  )
}
