import React from 'react';
import CartItem from './CartItem';

const Cart = (props) =>{ 

          // const arr = [1,2,3,4,5];

          const {products} = props;
          
          return (
               <div className='cart'>
                    {/* Iterating throught the product array which is present in state and passing the data to CartItem */}
                    {products.map((product)=>{
                         return (
                         <CartItem 
                              product={product}
                              key={product.id}
                              onIncreaseQuantity={props.onIncreaseQuantity}
                              onDecreaseQuantity={props.onDecreaseQuantity}
                              onDeleteProduct={props.onDeleteProduct}
                              />
                         )
                         // passing the handleIncreaseQuantity as a prop
                    })}

                    {/* <CartItem title={"Watch"} price={20000} qty={2}/> */}
                    <div style={{fontSize: 25}}><strong>Total:</strong> {props.total}</div>
               </div>
          );
     
}

export default Cart;