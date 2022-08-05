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

          {//*   Concept: If we call setState() function of form 1(object passed) thrice still the resultant change in the state would be equivalent to execution of only last setState() function 
          // this.setState({
          //      qty: this.state.qty + 1,
          //      title: "A Mobile Phone"
          // });
          // this.setState({
          //      qty: this.state.qty + 1,
          //      price: 20000
          // });
          // this.setState({
          //      qty: this.state.qty + 1
          // });
          }

          //? Variation
          // variation of setState() function of form 1
          // setState(object updating the state, callback function performed when object has finished updating the state)

          // Set state form 2 --> When we require the previous state then we use function form
          // this.setState( function )
          // this.setState((previousState) => {
          //      return {
          //           qty: previousState.qty + 1 
          //      }
          // });

          {//* Concept: If we call setState() function  of form 2(function passed) thrice in this case react will maintain a queue of functions and call them and then render it in UI
          // this.setState((previousState) => {
          //      return {
          //           qty: previousState.qty + 1 
          //      }
          // });

          // this.setState((previousState) => {
          //      return {
          //           qty: previousState.qty + 1 
          //      }
          // });

          // this.setState((previousState) => {
          //      return {
          //           qty: previousState.qty + 1 
          //      }
          // });
          }

          //? Variation
          // variation of setState() function of form 2
          // setState(function updating the state, callback function performed when function  finished updating the state)
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