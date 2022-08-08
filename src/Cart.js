import React from 'react'
import CartItem from './CartItem';

class Cart extends React.Component{

     constructor(){
          super();
          this.state = {
               products : [
                    {
                         price: 19999,
                         title: 'Mobile Phone',
                         qty : 5,
                         img : ' ',
                         id: 1
                    },
                    {
                         price: 999,
                         title: 'Watch',
                         qty : 10,
                         img : ' ',
                         id: 2
                    },
                    {
                         price: 49999,
                         title: 'Laptop',
                         qty : 1,
                         img : ' ',
                         id: 3
                    }
               ]
          }
     }

     handleIncreaseQuantity = (product) => {
          console.log("Please increase the quantity of ", product);
          // Getting the product array from state
          const {products} = this.state;

          const indexOfClickedProduct = products.indexOf(product);

          // increasing the value by 1 of clicked product in product array
          products[indexOfClickedProduct].qty += 1;

          // Updating the state with new values
          this.setState({
               // products: products
               products  //shorthand of above statement
          })

          
     }

     handleDecreaseQuantity = (product) => {
          console.log("Please increase the quantity of ", product);
          // Getting the product array from state
          const {products} = this.state;

          const indexOfClickedProduct = products.indexOf(product);

          if(products[indexOfClickedProduct].qty == 0){
               return ;
          }

          // increasing the value by 1 of clicked product in product array
          products[indexOfClickedProduct].qty -= 1;

          // Updating the state with new values
          this.setState({
               // products: products
               products  //shorthand of above statement
          })

          
     }

     render(){
          // const arr = [1,2,3,4,5];

          const {products} = this.state;
          
          return (
               <div className='cart'>
                    {/* Iterating throught the product array which is present in state and passing the data to CartItem */}
                    {products.map((product)=>{
                         return (
                         <CartItem 
                              product={product}
                              key={product.id}
                              onIncreaseQuantity={this.handleIncreaseQuantity}
                              onDecreaseQuantity={this.handleDecreaseQuantity}
                              />
                         )
                         // passing the handleIncreaseQuantity as a prop
                    })}

                    {/* <CartItem title={"Watch"} price={20000} qty={2}/> */}
                    {/* <CartItem/>
                    <CartItem/> */}
               {/* { arr.map((item)=>{
                    return item * 2;
               }) } */}
               </div>
          );
     }
}

export default Cart;