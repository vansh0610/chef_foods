
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   if (!cartItems || cartItems.length === 0) {
//     return <div className='cart'>Your cart is empty.</div>;
//   }
// const dispatch=useDispatch();
// const handleclearcart=() => {
//   dispatch(clearCart);
// }

//   return (

//     <div >
   
//      <center> <h1>Your Cart</h1></center>
//      <center><button className='' onClick={handleclearcart}>Clear cart</button></center>

//      <div className="cart">
//       <ul> 
//         {cartItems.map((item) => (
//           <li key={item.id} className='cart-item'>
//             <h4>{item.name}</h4>
//             <p>Price: ₹{item.price / 100}</p> {/* Assuming price is in paise */}
//             {item.cloudinaryImageID && (
//               <img 
//                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.cloudinaryImageID}`} 
//                 alt={item.name} 
//                 className='cart-item-image'
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>

//   );
// };

// export default Cart;






import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice'; // Import clearCart action

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return (<center><div className='cart'>Your cart is empty.Add items to cart.</div></center>);
  }

  const dispatch = useDispatch();
  const handleClearCart =() => {
    dispatch(clearCart());
  }

  return (
    <div>
      <center><h1>Your Cart</h1></center>
      <center><button className='clear-cart-btn' onClick={handleClearCart}>Clear Cart</button></center>
      <div className="cart">
        <ul> 
          {cartItems.map((item) => (
            <li key={item.id} className='cart-item'>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price / 100}</p> {/* Assuming price is in paise */}
              {item.cloudinaryImageID && (
                <img 
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.cloudinaryImageID}`} 
                  alt={item.name} 
                  className='cart-item-image'
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
