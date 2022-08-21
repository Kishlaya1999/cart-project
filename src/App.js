import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
import db from './firebase-config';

class App extends React.Component {

      constructor(){
          super();
          this.state = {
              products : []
          }
    }

    componentDidMount(){
    
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

          // decreasing the value by 1 of clicked product in product array
          products[indexOfClickedProduct].qty -= 1;

          // Updating the state with new values
          this.setState({
               // products: products
               products  //shorthand of above statement
          })

      }

    handleDeleteProduct = (id) =>{
          // Getting the product array from state
          const { products } = this.state;

          // filtering the items which are not equal to the id i.e removing the object whose id is equal 
          const items = products.filter((item) => item.id !== id);

          // Updating the state with new values
          this.setState({
              products: items
          })

    }

    getCartCount = () => {
      const {products } = this.state;

      var count = 0;
      
      products.forEach((product) =>{
        count += product.qty;
      })

      return count;
    }

    getCartTotal = () => {
      const {products} = this.state;

      let cartTotal = 0;

      products.forEach((product) =>{
        cartTotal += product.qty * product.price;
      })

      return cartTotal;
    }

    render(){
      const {products} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()}/>
          <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            total={this.getCartTotal()}
          />
        </div>
      );
    }
}

export default App;
