import React, { useState } from "react";
function Card(props) {
  const [cartItmesOne, setCartItemsOne] = useState({
    id: "",
    title: "",
    moneySign: "",
    price: "",
    img: "",
  });

  function addToCart(event){
    props.onAdd(cartItmesOne);
    event.preventDefault();
  }

  return (
    <div className="container-in-card">
      <div className="img-container">
        <img className="img-container-img" src={props.img} alt="" />
      </div>
      <div className="contents">
        <div className="product-title-container">
          <h2 className="product-title">{props.title}</h2>
        </div>
        <div className="contents-1">
          <h5 className="product-price">
            <span>{props.moneySign}</span>
            {props.price}
          </h5>
          <div className="btn-container ">
            <button
              data-itemid={props.id}
              onClick={addToCart}
              className="product-btn-1"
            >
              Add To Cart
            </button>
            <button type="button" className="product-btn-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
