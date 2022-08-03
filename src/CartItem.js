import React from 'react';


class CartItem extends React.Component {
     render() {
          return ( 
               <div className = 'cart-item' >
                    <div className='left-block'>
                         <img style={styles.image} src="" alt="" />
                    </div>
                    <div className='right-block'>
                         <div style={{fontSize: 25}}>Phone</div>
                         <div style={{color:"#777"}}>Rs 10,999</div>
                         <div style={{color:"#777"}}>Qty : 1</div>
                         <div className='action-icons'>

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