import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import  {ItemCount}  from '../ItemCount/ItemCount'
import style from '../ItemDetail/ItemDetail.module.css'
import back from '../../img/Back-PNG-Image.png'

export const ItemDetail = ({itemD}) => {
  // const [count, setCount] = useState(0)
  // const {addTocart, cart } = useContext(CartContext)

  // const handleaddToCar = () =>{
  //   addTocart(itemD, count)
  // }
  // console.log(cart,"gofosdfkspdfmsdipkojm")

    const onAdd = (cantidad) => {
        console.log(`se ha agregado ${cantidad} `)
    }
  return (
    <div className={style.detail}>
        <h1>{itemD.name}</h1>
        <div className={style.border}>
        <img src={itemD.image}/>
        <h3>category: {itemD.category}</h3>
        <h3>Price: ${itemD.price}</h3>
        </div>
        <div className="sub">
        <ItemCount stock={itemD.stock} initial={0} onAdd={onAdd}/>
        </div>
        <div className={style.back}>
           <Link to="/">
             <img src={back}/>
           </Link>
        </div>
        {/* <button 
        // onClick={() => setCount(0)}  
        onClick={handleaddToCar}
        className='btn boton__reset m-1'
        >
            Add to cart
        </button> */}
    </div>
  )
}


