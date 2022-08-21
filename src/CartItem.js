import React from 'react';


class CartItem extends React.Component {
     

     // increaseQuantiy = () => {
     //      // this.state.qty += 1;\
          
     //      // Set state form 1
     //      // this.setState( object ) 
     //      // this.setState({
     //      //      qty: this.state.qty + 1
     //      // });

     //      {//*   Concept: If we call setState() function of form 1(object passed) thrice still the resultant change in the state would be equivalent to execution of only last setState() function 
     //      // this.setState({
     //      //      qty: this.state.qty + 1,
     //      //      title: "A Mobile Phone"
     //      // });
     //      // this.setState({
     //      //      qty: this.state.qty + 1,
     //      //      price: 20000
     //      // });
     //      // this.setState({
     //      //      qty: this.state.qty + 1
     //      // });
     //      }

     //      //? Variation
     //      // variation of setState() function of form 1
     //      // setState(object updating the state, callback function performed when object has finished updating the state)

     //      // Set state form 2 --> When we require the previous state then we use function form
     //      // this.setState( function )
     //      this.setState((previousState) => {
     //           return {
     //                qty: previousState.qty + 1 
     //           }
     //      });

     //      {//* Concept: If we call setState() function  of form 2(function passed) thrice in this case react will maintain a queue of functions and call them and then render it in UI
     //      // this.setState((previousState) => {
     //      //      return {
     //      //           qty: previousState.qty + 1 
     //      //      }
     //      // });

     //      // this.setState((previousState) => {
     //      //      return {
     //      //           qty: previousState.qty + 1 
     //      //      }
     //      // });

     //      // this.setState((previousState) => {
     //      //      return {
     //      //           qty: previousState.qty + 1 
     //      //      }
     //      // });
     //      }

     //      //? Variation
     //      // variation of setState() function of form 2
     //      // setState(function updating the state, callback function performed when function  finished updating the state)
     // }
     
     // decreasaeQuantiy = () => {

     //      if(this.state.qty >= 1){
     //           this.setState({
     //                qty: this.state.qty - 1
     //           });
     //      }

     // }


     render() {
          // console.log(this.props);
          // Destructuring the props
          const {title , price, qty, img} = this.props.product;
          const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
          return ( 

               <div className = 'cart-item' >
                    <div className='left-block'>
                         <img style={styles.image} src={img} alt="" />
                    </div>
                    <div className='right-block'>
                         <div style={{fontSize: 25}}>{title}</div>
                         <div style={{color:"#777"}}>Rs {price}</div>
                         <div style={{color:"#777"}}>Qty : {qty}</div>
                         <div className='cart-item-actions'>
                              {/* Buttons */}
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                              alt="increase"
                              onClick={() => onIncreaseQuantity(product)} />
                              {/* On click we are calling the function which is executing the function which we are getting as prop and passing the current product as argument to handleIncreaseFunction */}
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                              alt="decrease"
                              onClick={() => onDecreaseQuantity(product)} />
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                              alt="delete" 
                              onClick={() => onDeleteProduct(product.id)}/>
                         </div>
                    </div>
               
               </div>
          )
     }
}

const styles = {
     image: {
          width: 110,
          height: 110,
          // background: "#777",
          borderRadius: 5
     }
}

export default CartItem;