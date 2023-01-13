import React from 'react'
import {Item} from '../Item/Item'
import products from '../../products'
import style from './ItemList.module.css'

export const ItemList = ({product}) => {
  return (
    <div  className={style.itemlist}>
        {
          product.map((i) =>{
            
            return (
                <Item key={i.id} id={i.id}  name={i.name} image={i.image} category={i.category} price={i.price}/>
                )
              }
                )
              }
    </div>
  )
}
