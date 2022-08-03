import React from 'react';


class CartItem extends React.Component {
     constructor(){
          super();
          this.state = {
               price: 19999,
               title: 'Mobile Phone',
               qty : 1,
               img : ' '
          }
     }

     increaseQuantiy = () => {
          // this.state.qty += 1;\
          
          // Set state form 1
          // this.setState( object ) 
          // this.setState({
          //      qty: this.state.qty + 1
          // });
          
          // Set state form 2 --> When we require the previous state then we use function form
          // this.setState( function )
          this.setState((previousState) => {
               return {
                    qty: previousState.qty + 1 
               }
          })

     }
     
     decreasaeQuantiy = () => {

          if(this.state.qty >= 1){
               this.setState({
                    qty: this.state.qty - 1
               });
          }

     }


     render() {
          return ( 
               <div className = 'cart-item' >
                    <div className='left-block'>
                         <img style={styles.image} src="" alt="" />
                    </div>
                    <div className='right-block'>
                         <div style={{fontSize: 25}}>{this.state.title}</div>
                         <div style={{color:"#777"}}>Rs {this.state.price}</div>
                         <div style={{color:"#777"}}>Qty : {this.state.qty}</div>
                         <div className='cart-item-actions'>
                              {/* Buttons */}
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                              alt="increase"
                              onClick={this.increaseQuantiy} />
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                              alt="decrease"
                              onClick={this.decreasaeQuantiy} />
                              <img 
                              className='action-icons' 
                              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                              alt="delete" />
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
          background: "#777",
          borderRadius: 5
     }
}

export default CartItem;