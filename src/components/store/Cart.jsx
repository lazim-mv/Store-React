import React from 'react'

function Cart(props) {
 
    
  return (
    <div className='cart'>
        <div className="cart-centering">
        <div className='cart-img-container'>
            <img className='cart-img' src={props.img} alt="" />
        </div>
        <div className='cart-content-container'>
            <h1 className="product-title">{props.title}</h1>
            <p className='cart-description'>{props.desc}</p>
            <p className='product-price'><span>{props.moneySign}</span> {props.price}</p>
            <div className="cart-quantity-container">
            <div>
                <button onClick={props.addCount} type='button'>+</button>
                </div>
                <div className='qty'>
                <p className='cart-quantity'>Qty <span>{props.count}</span></p>
                </div>
                <div>
                <button onClick={props.minusCount} type='button'>-</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}



export default Cart

