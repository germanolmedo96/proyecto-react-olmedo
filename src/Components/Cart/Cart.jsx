import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
// const rows = [
//   {
//     cart
//     id: 1,
//     username: 'pepe',
//     nombre: 202222,
//   },
// ];

export default function HeaderColumnsGrid() {
  const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = React.useContext(CartContext)
  console.log(cart)

    const handledeletproduct = (id) =>{
    deleteProductbyid(id)
  }
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          {
            renderCell: (params) => <img src={params.value} />,
            field:'image',
            headerName:'producto'
          },
          {
            field: 'name',
            headerName: 'name',
          },
          {
            field:'price',
            headerName: 'price',
          },
          {
            field:'cantidad',
            headerName: 'cantidad',
          },
          {
            field:'cantidadd',
            headerName:'precio total'
          },
          {
            renderCell: (params) => <button onClick={()=>handledeletproduct(params.row.id)}>borrar</button>,
            field:'eliminar',
            headerName:'eliminar'
            
          }
          // <button onClick={()=>handledeletproduct(id)}>
          //           delete product
          //  </button>
        ]}
        rows={cart.map((e)=>{
          return{
            ...e, cantidadd:e.cantidad * e.price
          }
        })}
      />
            <button
             onClick={()=>emptyCart()}
            >
              Empty Cart
            </button>

            <Link to="/checkout" >Finish buying</Link>
    </div>
  );
}

// import  { useContext } from 'react'
// import { CartContext } from '../../context/cartContext'
// import { Link } from 'react-router-dom'
// import { DataGrid } from '@mui/x-data-grid';
// import style from './Cart.module.css'

// const Cart = () => {
//   const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = useContext(CartContext)
  
//   const handledeletproduct = (id) =>{
//     deleteProductbyid(id)
//   }

  
 
//   return (
//     <div >
//       <DataGridPro {...data} /> 
//       {
//         cart.length > 0 ?(
//           <>
//           <h1>Cart</h1>
//           <div class={style.titulos}>
//             <ul>
//                 <li>
//                   <h4>
//                 Product
//                   </h4>
//                 </li>
//                 <li className={style.prod}>
//                   <h4>
//                     nombre
//                   </h4>
//                 </li>
//               <li>
//                 <h4>
//                 Unit Price
//                 </h4>
//               </li>
//               <li>
//                 <h4>
//                 Units
//                 </h4>
//               </li>
//               <li>
//                 <h5>
//                 Total price
//                 </h5>
//               </li>
//             </ul>
//           </div>
//           {
//             cart.map(item=>(
//               <div key={item.id} className={style.category}>
//                 <ul>
//                   <li>
//                     <button onClick={()=>handledeletproduct(item.id)}>
//                     delete product
//                     </button>
//                   </li>
//                   <li>
//                 <div className={style.img}>
//                   <img src={item.image} alt={item.name}/>
//                 </div>
//                   </li>
//                   <li>
//                 <div className={style.name}>
//                   <h4>{item.name}</h4>
//                 </div>
//                   </li>
//                   <li>
//                 <div>
//                   <h4>{item.price}</h4>
//                 </div>
//                   </li>
//                   <li>
//                 <div>
//                   <h4>{item.cantidad}u.</h4>
//                 </div>
//                   </li>
//                   <li>
//                 <div>
//                   <h4>${item.cantidad * item.price}</h4>
//                 </div>
//                   </li>
//                 </ul>
//               </div>
//             ))
//           }
//           <div>
//             <div>
//               <h3>Total Cart:</h3>
//               <h3 >${totalPrecioCarrito()}</h3>
//             </div>
//           </div>
//           <div>
//             <button
//              onClick={()=>emptyCart()}
//             >
//               Empty Cart
//             </button>
//             <Link to="/checkout" >Finish buying</Link>
//           </div>
//           </>
//         ):(
//           <div>
//             <h1 className="text-2x1 font-medium">The cart is empty</h1>
//             <div>
//               <Link to="/">Back to shop</Link>
//             </div>
//           </div>
//         )

//       }
//     </div>
//   )
// }

// export default Cart;