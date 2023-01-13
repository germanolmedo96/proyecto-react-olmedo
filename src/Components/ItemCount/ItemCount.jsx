import React, {  useContext, useEffect, useState } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import style from './ItemCount.module.css'
import { Link, useParams } from 'react-router-dom'
import { CartContext  } from '../../context/cartContext'
import { products } from '../../products'

export const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0)
  const [purchase, setPurchase] = useState(false)
  const {idProd} = useParams()

  const {addTocart, cart } = useContext(CartContext)


  const handleaddToCar = () =>{
    addTocart(products.find(count>0?p=>p.id == idProd:alert("Para continuar debes seleccionar la cantidad")), count)
    setPurchase(!purchase)
  }
  console.log(cart,"gofosdfkspdfmsdipkojm")
  
//   const click = () => {
//    setCount(count +1)
//    setCount(count -1)
  
 
// }

/* useEffect(()=>{
 getCount().then(res =>{
     setContador(res)
 })
},[])
const getCount = ()=>{
 return new Promise((resolve, reject)=>{
     setTimeout(()=>{
         resolve(ItemCount)
     },2000)
 })
} */
return (
 

   <div className={style.cart}>
    <div className={style.subcart}>
       <button 
       onClick={() => setCount(count+1) } disabled={count===stock} 
       className='btn boton__aumentar m-1'>
        +
        </button>
        <strong className='contador' >{count}</strong>
        <button 
        onClick={() => setCount(count -1)} disabled={count === 0} className='btn boton__disminuir m-1'>
          -
          </button>
        {
          !purchase?(
        <button 
        // onClick={() => setCount(0)}
        onClick={handleaddToCar}
        className='btn boton__reset m-1'
        >
            Add to cart
        </button>
          ):(
            <>
              <Link to="/cart">
                Finish purchase
              </Link>
            </>
          )

        }
    </div>
   </div>
  )
}
