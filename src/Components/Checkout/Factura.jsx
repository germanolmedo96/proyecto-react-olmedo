import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom'

export const Factura = ({nombre, apellido, direccion, codigoPostal, telefono, ciudad, pais}) => {
    const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = React.useContext(CartContext)
    const [compra, setCompra] = useState(false)
    const navigate = useNavigate()

    const handleClear = () =>{
        emptyCart()
        navigate("/")
        alert("compra realizada con exito")
    }


  return (
    <div>
        <h2>Datos</h2>
            <h4>{nombre}</h4>
            <h4>{apellido}</h4>
            <h4>{direccion}</h4>
            <h4>{codigoPostal}</h4>
            <h4>{telefono}</h4>
            <h4>{ciudad}</h4>
            <h4>{pais}</h4>
        <h2>Pedido</h2>
        {
             cart.map(item=>(
                <div key={item.id} >
                  <ul>
                    <li>
                    </li>
                    <li>
                  <div >
                    <img src={item.image} alt={item.name}/>
                  </div>
                    </li>
                    <li>
                  <div >
                    <h4>{item.name}</h4>
                  </div>
                    </li>
                    <li>
                      <h4>Cantidad</h4>  
                      <h4>{item.cantidad}u.</h4>
                    </li>
                    <li>
                  <div>
                    <h4>Total</h4>
                    <h4>${item.cantidad * item.price}</h4>
                  </div>
                    </li>
                  </ul>
                </div>
              ))
        }

        <button 
        onClick={handleClear}
        >
            pagar
        </button>



    </div>
  )
}
