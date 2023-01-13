import React from 'react'
import { Link } from 'react-router-dom';
import style from'./Item.module.css'

export const Item = ({name, image, CODE,category, price,id }) => {
  return (
    <div className={style.item}>
        <h2>{name}</h2>
        <div className={style.desc}>  
        <div className="i-product">
            <img src={image}/>
        </div>
        <p>category: {category}</p>
        <p>${price}</p> 
        <Link to={`/item/${id}`}> 
           <button>ver mas detalles</button>
        </Link>
        </div>
    </div>
  )
}